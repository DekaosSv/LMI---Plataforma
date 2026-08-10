import zipfile
import xml.etree.ElementTree as ET
import json
import os
import re
import sys
import unicodedata

sys.stdout.reconfigure(encoding='utf-8')

TEAM_ID_MAP = {
    "interdemilan": "interdemilan",
    "realmadrid": "realmadrid",
    "fcbarcelona": "fcbarcelona",
    "terengganufc": "terengganufc",
    "acmilan": "acmiln",
    "acmiln": "acmiln",
    "bayernleverkusen": "bayernleverkusen",
    "rbleipzig": "rbleipzig",
    "bocajuniors": "bocajuniors",
    "galatasaray": "galatasaray",
    "psg": "psg",
    "arsenal": "arsenal",
    "como1907": "como1907",
    "como": "como1907",
    "tottenhamhotspur": "tottenhamhotspur",
    "tottenham": "tottenhamhotspur",
    "hellasverona": "hellasverona",
    "hellas": "hellasverona",
    "bayermunich": "bayermunich",
    "bayernmunich": "bayermunich",
    "manchesterunited": "manchesterunited",
    "melbournecity": "melbournecity",
    "wrexham": "wrexham",
    "atleticodemadrid": "atleticodemadrid",
    "atleticomadrid": "atleticodemadrid"
}

def normalize_key(name):
    if not name: return ""
    # Normalize unicode accents and lower
    nfkd_form = unicodedata.normalize('NFKD', str(name))
    only_ascii = "".join([c for c in nfkd_form if not unicodedata.combining(c)])
    # Remove common suffixes like (p), (P), (c), (C)
    clean = re.sub(r'\s*\([pPcC]\)\s*$', '', only_ascii)
    return re.sub(r'[^a-zA-Z0-9]', '', clean).lower()

def extraer_posicion_y_nombre(cadena_original):
    if not cadena_original:
        return "MC", ""

    original = cadena_original.strip()
    
    pats_pos = [
        ('PT', r'^(PT|POR|GK)\b[:\s]*'),
        ('CT', r'^(CT|DFC|DF)\b[:\s]*'),
        ('LI', r'^(LI|LTI)\b[:\s]*'),
        ('LD', r'^(LD|LTD)\b[:\s]*'),
        ('MCD', r'^(MCD|CD)\b[:\s]*'),
        ('MP', r'^(MP|MCO|MO)\b[:\s]*'),
        ('ID', r'^(ID|MDD|MD)\b[:\s]*'),
        ('II', r'^(II|MDI|MI)\b[:\s]*'),
        ('SD', r'^(SD|SP)\b[:\s]*'),
        ('EI', r'^(EI|EXI|EL)\b[:\s]*'),
        ('ED', r'^(ED|EXD|EF)\b[:\s]*'),
        ('DC', r'^(DC|DEL|DL)\b[:\s]*'),
        ('MC', r'^(MC|MED|VOL|M)\b[:\s]*')
    ]

    pos_detectada = "MC"
    nombre_final = original

    for pos_code, patron in pats_pos:
        match = re.search(patron, original, re.IGNORECASE)
        if match:
            pos_detectada = pos_code
            nombre_final = original[match.end():].strip()
            break

    if not nombre_final:
        nombre_final = original

    return pos_detectada, nombre_final

def get_shared_strings(z):
    if 'xl/sharedStrings.xml' not in z.namelist():
        return []
    tree = ET.fromstring(z.read('xl/sharedStrings.xml'))
    ns = {'ns': 'http://schemas.openxmlformats.org/spreadsheetml/2006/main'}
    res = []
    for si in tree.findall('ns:si', ns):
        txt = ''.join([t.text for t in si.findall('.//ns:t', ns) if t.text])
        res.append(txt)
    return res

def find_sheet_xml_paths(z):
    wb_content = z.read('xl/workbook.xml')
    wb_tree = ET.fromstring(wb_content)
    
    rels_content = z.read('xl/_rels/workbook.xml.rels')
    rels_tree = ET.fromstring(rels_content)
    
    ns_wb = {'ns': 'http://schemas.openxmlformats.org/spreadsheetml/2006/main'}
    ns_rel = {'rel': 'http://schemas.openxmlformats.org/package/2006/relationships'}
    
    rId_to_target = {}
    for relationship in rels_tree.findall('rel:Relationship', ns_rel):
        rid = relationship.attrib.get('Id')
        target = relationship.attrib.get('Target')
        rId_to_target[rid] = target
        
    sheet_paths = {}
    for sheet in wb_tree.findall('.//ns:sheet', ns_wb):
        name = sheet.attrib.get('name')
        rId = sheet.attrib.get('{http://schemas.openxmlformats.org/officeDocument/2006/relationships}id')
        target_file = rId_to_target.get(rId)
        
        if target_file.startswith('/xl/'):
            xml_path = target_file[1:]
        elif target_file.startswith('xl/'):
            xml_path = target_file
        else:
            xml_path = 'xl/' + target_file
            
        sheet_paths[name] = xml_path
    return sheet_paths

def parse_sheet_cells(z, sheet_file, strings):
    tree = ET.fromstring(z.read(sheet_file))
    ns = {'ns': 'http://schemas.openxmlformats.org/spreadsheetml/2006/main'}
    rows_data = {}
    
    for r in tree.findall('.//ns:row', ns):
        r_idx = int(r.attrib.get('r'))
        rows_data[r_idx] = {}
        for c in r.findall('ns:c', ns):
            cell_ref = c.attrib.get('r')
            col_letter = re.sub(r'\d+', '', cell_ref)
            t = c.attrib.get('t')
            
            # Soporte para inlineStr (como los guardados por openpyxl)
            if t == 'inlineStr':
                is_elem = c.find('ns:is', ns)
                if is_elem is not None:
                    t_elem = is_elem.find('ns:t', ns)
                    val = t_elem.text if t_elem is not None else ''
                else:
                    val = ''
            else:
                # Comportamiento tradicional buscando <v>
                v = c.find('ns:v', ns)
                val = v.text if v is not None else ''
                if t == 's' and val is not None and val.isdigit() and int(val) < len(strings):
                    val = strings[int(val)]
            
            rows_data[r_idx][col_letter] = val.strip() if val else ''
    return rows_data

def col_idx_to_letter(idx):
    # Converts 0 -> A, 1 -> B, ... 17 -> R
    temp = ""
    while idx >= 0:
        temp = chr(idx % 26 + 65) + temp
        idx = idx // 26 - 1
    return temp

def load_old_data():
    if not os.path.exists('data.js'):
        return None
    try:
        with open('data.js', 'r', encoding='utf-8') as f:
            content = f.read()
        match = re.search(r'(?:var|const|let)\s+INITIAL_LMI_DATA\s*=\s*({.*?});', content, re.DOTALL)
        if match:
            return json.loads(match.group(1))
    except Exception as e:
        print(f"⚠️ Error loading old data.js: {e}")
    return None

def process_excel():
    print("🔄 Iniciando proceso de importación del Excel 'lmi temp 9.xlsx'...")
    
    # 1. Load old database template to preserve details
    old_data = load_old_data()
    old_teams = {}
    old_players_by_norm = {}
    
    if old_data:
        print("📁 Base de datos existente 'data.js' cargada con éxito.")
        for t in old_data.get("teams", []):
            old_teams[t["id"]] = t
        for p in old_data.get("players", []):
            old_players_by_norm[normalize_key(p["name"])] = p
    else:
        print("⚠️ No se encontró base de datos 'data.js' previa o estaba corrupta, se usarán valores por defecto.")

    # 2. Parse Excel
    if not os.path.exists('lmi temp 9.xlsx'):
        print("❌ Error: No se encontró el archivo 'lmi temp 9.xlsx' en la ruta.")
        sys.exit(1)

    with zipfile.ZipFile('lmi temp 9.xlsx', 'r') as z:
        strings = get_shared_strings(z)
        sheet_xml_paths = find_sheet_xml_paths(z)
        
        # Verify required sheets
        # Validar hojas obligatorias en el archivo Excel
        required_sheets = ['Lista', 'Registro Liga']
        for r_sheet in required_sheets:
            if r_sheet not in sheet_xml_paths:
                print(f"❌ Error: La hoja '{r_sheet}' es obligatoria en el Excel pero no se encontró.")
                print(f"Hojas disponibles: {list(sheet_xml_paths.keys())}")
                sys.exit(1)

        print("📑 Parseando hojas del Excel...")
        lista_data = parse_sheet_cells(z, sheet_xml_paths['Lista'], strings)
        registro_data = parse_sheet_cells(z, sheet_xml_paths['Registro Liga'], strings)
        registro_champions = parse_sheet_cells(z, sheet_xml_paths['Registro Champions'], strings) if 'Registro Champions' in sheet_xml_paths else {}
        registro_estelar = parse_sheet_cells(z, sheet_xml_paths['RegistroEstelar'], strings) if 'RegistroEstelar' in sheet_xml_paths else {}

        # 2.5. Cargar datos del club desde la hoja 'Clubes' si existe
        clubes_excel_data = {}
        if 'Clubes' in sheet_xml_paths:
            print("🛡️ Cargando detalles personalizados de los clubes desde la hoja 'Clubes'...")
            clubes_sheet = parse_sheet_cells(z, sheet_xml_paths['Clubes'], strings)
            
            # Mapear dinámicamente las cabeceras de la fila 1 a las letras de columna
            header_map = {}
            for col_letter, val in clubes_sheet.get(1, {}).items():
                if val:
                    header_map[normalize_key(val)] = col_letter
            
            col_equipo = header_map.get(normalize_key("Equipo"))
            col_shortName = header_map.get(normalize_key("Abreviatura"))
            col_stadium = header_map.get(normalize_key("Estadio"))
            col_manager = header_map.get(normalize_key("DT"))
            col_budget = header_map.get(normalize_key("Presupuesto"))
            col_init_budget = header_map.get(normalize_key("Presupuesto Inicial"))
            col_primary = header_map.get(normalize_key("Color Primario"))
            col_secondary = header_map.get(normalize_key("Color Secundario"))
            col_gradient = header_map.get(normalize_key("Degradado Fondo"))
            col_logo = header_map.get(normalize_key("Logo"))
            col_change_note = header_map.get(normalize_key("Nota Cambio Leyenda"))
            col_remove_note = header_map.get(normalize_key("Nota Eliminar Leyenda"))
            col_league_rank = header_map.get(normalize_key("Posicion en Liga")) or header_map.get(normalize_key("Posicion"))
            
            for row_idx in sorted(clubes_sheet.keys()):
                if row_idx == 1:
                    continue
                row = clubes_sheet[row_idx]
                raw_tname = row.get(col_equipo, '').strip() if col_equipo else ''
                if not raw_tname:
                    continue
                norm_t = normalize_key(raw_tname)
                tid = TEAM_ID_MAP.get(norm_t, norm_t)
                
                # Leer presupuestos y posicion en liga
                budget_raw = row.get(col_budget, '').strip() if col_budget else ''
                init_budget_raw = row.get(col_init_budget, '').strip() if col_init_budget else ''
                rank_raw = row.get(col_league_rank, '').strip() if col_league_rank else ''
                
                budget = int(budget_raw) if budget_raw.isdigit() else 100000000
                init_budget = int(init_budget_raw) if init_budget_raw.isdigit() else 100000000
                league_rank = int(rank_raw) if rank_raw.isdigit() else None
                
                # Sincronizar presupuesto con presupuesto inicial si el de la columna Presupuesto quedó en el valor base
                if init_budget != 100000000 and budget == 100000000:
                    budget = init_budget
                
                clubes_excel_data[tid] = {
                    "shortName": row.get(col_shortName, '').strip() if col_shortName else '',
                    "stadium": row.get(col_stadium, '').strip() if col_stadium else '',
                    "manager": row.get(col_manager, '').strip() if col_manager else '',
                    "budget": budget,
                    "initialBudget": init_budget,
                    "leagueRank": league_rank,
                    "primaryColor": row.get(col_primary, '').strip() if col_primary else '',
                    "secondaryColor": row.get(col_secondary, '').strip() if col_secondary else '',
                    "bgGradient": row.get(col_gradient, '').strip() if col_gradient else '',
                    "logo": row.get(col_logo, '').strip() if col_logo else '',
                    "legendChangeNote": row.get(col_change_note, '').strip() if col_change_note else '',
                    "legendRemoveNote": row.get(col_remove_note, '').strip() if col_remove_note else ''
                }

        # 3. Construir diccionario de Equipos (basado en los encabezados de la hoja Lista)
        print("🛡️ Procesando equipos y asignando posiciones de la liga...")
        teams_dict = {}
        col_to_team_id = {}
        
        # La Fila 1 de la hoja Lista tiene los nombres de los equipos
        row1_lista = lista_data.get(1, {})
        
        # Iterar sobre las 18 columnas (A a la R)
        for col_idx in range(18):
            col_letter = col_idx_to_letter(col_idx)
            raw_team_name = row1_lista.get(col_letter, '').strip()
            if not raw_team_name:
                continue
                
            norm_tname = normalize_key(raw_team_name)
            team_id = TEAM_ID_MAP.get(norm_tname, norm_tname)
            
            # Mapear letra de columna a ID del equipo
            col_to_team_id[col_letter] = team_id
            
            # La posición es el orden de las columnas (1 a 18)
            rank = col_idx + 1
            
            # Primero ver si el equipo tiene datos personalizados en la hoja 'Clubes' del Excel
            excel_club = clubes_excel_data.get(team_id, {})
            
            # Preservar metadatos anteriores si el equipo ya existía o colocar valores predeterminados
            if team_id in old_teams:
                team_obj = old_teams[team_id].copy()
                team_obj["name"] = raw_team_name
            else:
                team_obj = {
                    "id": team_id,
                    "name": raw_team_name,
                    "shortName": raw_team_name[:3].upper(),
                    "colors": {
                        "primary": "#004789",
                        "secondary": "#ffffff",
                        "bgGradient": "linear-gradient(135deg, #0b0e15 0%, #161f30 100%)"
                    },
                    "stadium": f"Estadio {raw_team_name}",
                    "manager": "Director Técnico",
                    "budget": 100000000,
                    "initialBudget": 100000000,
                    "legendChangeNote": "",
                    "legendRemoveNote": ""
                }
            
            # Asignar posición de la liga y sobreescribir con datos del Excel si están presentes
            team_obj["leagueRank"] = rank
            
            if excel_club:
                if excel_club["leagueRank"] is not None:
                    team_obj["leagueRank"] = excel_club["leagueRank"]
                if excel_club["shortName"]: team_obj["shortName"] = excel_club["shortName"]
                if excel_club["stadium"]: team_obj["stadium"] = excel_club["stadium"]
                if excel_club["manager"]: team_obj["manager"] = excel_club["manager"]
                team_obj["budget"] = excel_club["budget"]
                team_obj["initialBudget"] = excel_club["initialBudget"]
                
                # Colores
                if "colors" not in team_obj:
                    team_obj["colors"] = {}
                if excel_club["primaryColor"]: team_obj["colors"]["primary"] = excel_club["primaryColor"]
                if excel_club["secondaryColor"]: team_obj["colors"]["secondary"] = excel_club["secondaryColor"]
                if excel_club["bgGradient"]: team_obj["colors"]["bgGradient"] = excel_club["bgGradient"]
                
                if excel_club["logo"]: 
                    team_obj["logo"] = excel_club["logo"]
                
                team_obj["legendChangeNote"] = excel_club["legendChangeNote"]
                team_obj["legendRemoveNote"] = excel_club["legendRemoveNote"]
            else:
                # Comportamiento por defecto/fallback
                if "stadium" not in team_obj: team_obj["stadium"] = f"Estadio {raw_team_name}"
                if "manager" not in team_obj: team_obj["manager"] = "Director Técnico"
                if "budget" not in team_obj: team_obj["budget"] = 100000000
                if "initialBudget" not in team_obj: team_obj["initialBudget"] = 100000000
            
            # Auto-corregir extensión del logotipo si el archivo no existe físicamente en disco
            current_logo = team_obj.get("logo", "")
            if not current_logo or not os.path.exists(current_logo):
                # Intentar buscar logotipo existente en Logos Equipos/
                logo_path = current_logo or f"Logos Equipos/{team_id}.png"
                base, ext = os.path.splitext(logo_path)
                for alt_ext in ['.webp', '.png', '.jpg', '.jpeg', '.PNG']:
                    alt_logo = base + alt_ext
                    if os.path.exists(alt_logo):
                        team_obj["logo"] = alt_logo
                        if current_logo and current_logo != alt_logo:
                            print(f"  🔧 Auto-corrigiendo extensión del logotipo de {raw_team_name}: '{current_logo}' -> '{alt_logo}'")
                        break
                else:
                    if not current_logo:
                        team_obj["logo"] = f"Logos Equipos/{team_id}.png"
            
            teams_dict[team_id] = team_obj

        # 4. Construir lista de Jugadores estrictamente desde la hoja Lista (nombres y posiciones)
        print("⚽ Procesando plantillas de los clubes...")
        players_list = []
        player_id_counter = 1
        
        # El roster de jugadores va desde la fila 2 hasta la 25 (para no mezclar con la lista de No Renovados en la fila 26+)
        for row_idx in range(2, 26):
            row_lista = lista_data.get(row_idx, {})
            
            # Recorrer cada columna activa de la hoja Lista
            for col_idx in range(18):
                col_letter = col_idx_to_letter(col_idx)
                if col_letter not in col_to_team_id:
                    continue
                    
                team_id = col_to_team_id[col_letter]
                lista_raw = row_lista.get(col_letter, '').strip()
                
                # Si la celda contiene datos de jugador
                if lista_raw:
                    # Limpiar prefijo de posición (ej. "PT: Courtois" -> pos="PT", name="Courtois")
                    pos, clean_lista_name = extraer_posicion_y_nombre(lista_raw)
                    player_name = clean_lista_name
                    
                    if player_name:
                        norm_pname = normalize_key(player_name)
                        
                        # Preservar precio e isLegend si existía en data.js
                        is_legend = False
                        price = 5000000
                        if norm_pname in old_players_by_norm:
                            old_p = old_players_by_norm[norm_pname]
                            is_legend = old_p.get("isLegend", False)
                            price = old_p.get("price", 5000000)

                        players_list.append({
                            "id": f"p_{player_id_counter}",
                            "name": player_name,
                            "position": pos,
                            "teamId": team_id,
                            "goals": 0,
                            "assists": 0,
                            "goals_liga": 0,
                            "assists_liga": 0,
                            "goals_champions": 0,
                            "assists_champions": 0,
                            "goals_estelar": 0,
                            "assists_estelar": 0,
                            "price": price,
                            "isLegend": is_legend
                        })
                        player_id_counter += 1

        # 4.5. Procesar jugadores No Renovados (Hoja Lista, Columna A, Fila 27 en adelante)
        print("📋 Procesando lista de jugadores No Renovados...")
        non_renewed_players = []
        for row_idx in range(27, 200): # Rango amplio para leer todos
            row_lista = lista_data.get(row_idx, {})
            lista_raw = row_lista.get('A', '').strip()
            if lista_raw:
                pos, clean_lista_name = extraer_posicion_y_nombre(lista_raw)
                if clean_lista_name:
                    non_renewed_players.append({
                        "name": clean_lista_name,
                        "position": pos,
                        "raw": lista_raw
                    })

        # Helper map to find players quickly in stats mapping
        players_by_norm = {}
        for p in players_list:
            players_by_norm[normalize_key(p["name"])] = p

        # 5. Map Goals & Assists from 'Registro Liga', 'Registro Champions', and 'RegistroEstelar' sheets
        player_id_counter_ref = [player_id_counter]
        
        def map_tournament_stats(registro_data, key_goals, key_assists, sheet_name):
            for row_idx in sorted(registro_data.keys()):
                if row_idx == 1:
                    continue # Skip header
                    
                row = registro_data[row_idx]
                raw_pname = row.get('B', '').strip()
                raw_tname = row.get('A', '').strip()
                
                if not raw_pname:
                    continue
                    
                goles = int(row.get('C', 0)) if row.get('C', '').isdigit() else 0
                asists = int(row.get('D', 0)) if row.get('D', '').isdigit() else 0
                
                # Normalize names to find match
                norm_reg_pname = normalize_key(raw_pname)
                norm_tname = normalize_key(raw_tname)
                team_id = TEAM_ID_MAP.get(norm_tname, norm_tname)
                
                if norm_reg_pname in players_by_norm:
                    player = players_by_norm[norm_reg_pname]
                    # Solo sumar estadísticas si el equipo registrado en el partido coincide con el equipo actual del jugador
                    if player["teamId"] == team_id:
                        player[key_goals] += goles
                        player[key_assists] += asists
                    else:
                        print(f"  ⚠️ Estadísticas omitidas para '{raw_pname}' (en plantilla está en '{player['teamId']}', pero el registro indica '{team_id}')")
                else:
                    # Jugador extra omitido: no se añade a la plantilla ya que no figura en la hoja principal 'Lista'
                    print(f"  ℹ️ Jugador extra omitido en {sheet_name} (no está en la hoja Lista): '{raw_pname}' ({raw_tname})")

        print("📈 Importando estadísticas de goles y asistencias desde 'Registro Liga'...")
        map_tournament_stats(registro_data, "goals_liga", "assists_liga", "Registro Liga")
        
        print("📈 Importando estadísticas de goles y asistencias desde 'Registro Champions'...")
        map_tournament_stats(registro_champions, "goals_champions", "assists_champions", "Registro Champions")
        
        print("📈 Importando estadísticas de goles y asistencias desde 'RegistroEstelar'...")
        map_tournament_stats(registro_estelar, "goals_estelar", "assists_estelar", "RegistroEstelar")

        # Sum total goals and assists
        for p in players_list:
            p["goals"] = p["goals_liga"] + p["goals_champions"] + p["goals_estelar"]
            p["assists"] = p["assists_liga"] + p["assists_champions"] + p["assists_estelar"]
            
        # Update player_id_counter to reflect additions
        player_id_counter = player_id_counter_ref[0]

        # 5.5. Try to read brackets for Copa Estelar and UEFA Champions League from Excel
        def parse_bracket_sheet(sheet_data):
            matches = []
            # Row 1 is headers (Fase, Equipo 1, Goles 1, Equipo 2, Goles 2, Estado)
            for row_idx in sorted(sheet_data.keys()):
                if row_idx == 1:
                    continue
                row = sheet_data[row_idx]
                fase = row.get('A', '').strip()
                if not fase:
                    continue
                matches.append({
                    "fase": fase,
                    "team1": row.get('B', '').strip(),
                    "score1": str(row.get('C', '')).strip(),
                    "team2": row.get('D', '').strip(),
                    "score2": str(row.get('E', '')).strip(),
                    "estado": row.get('F', '').strip() or 'Por Jugar'
                })
            return matches

        copa_matches = []
        if 'CopaEstelar' in sheet_xml_paths:
            print("🏆 Cargando datos de eliminación directa para Copa Estelar...")
            copa_sheet = parse_sheet_cells(z, sheet_xml_paths['CopaEstelar'], strings)
            copa_matches = parse_bracket_sheet(copa_sheet)
        else:
            print("ℹ️ Hoja 'CopaEstelar' no encontrada en Excel, se conservarán los valores preestablecidos.")
            if old_data and "copaEstelarMatches" in old_data:
                copa_matches = old_data["copaEstelarMatches"]

        champions_matches = []
        if 'ChampionsLeague' in sheet_xml_paths:
            print("🏆 Cargando datos de eliminación directa para Champions League...")
            champ_sheet = parse_sheet_cells(z, sheet_xml_paths['ChampionsLeague'], strings)
            champions_matches = parse_bracket_sheet(champ_sheet)
        else:
            print("ℹ️ Hoja 'ChampionsLeague' no encontrada en Excel, se conservarán los valores preestablecidos.")
            if old_data and "championsLeagueMatches" in old_data:
                champions_matches = old_data["championsLeagueMatches"]

        # Default fallback values for Copa Estelar if empty
        if not copa_matches:
            copa_matches = [
                { "fase": "Cuartos 1", "team1": "Bayern Leverkusen", "score1": "2", "team2": "Real Madrid", "score2": "1", "estado": "Finalizado" },
                { "fase": "Cuartos 2", "team1": "Como 1907", "score1": "0", "team2": "Wrexham", "score2": "1", "estado": "Finalizado" },
                { "fase": "Cuartos 3", "team1": "Inter de Milan", "score1": "2", "team2": "AC Milan", "score2": "0", "estado": "Finalizado" },
                { "fase": "Cuartos 4", "team1": "Bayern Leverkusen", "score1": "1", "team2": "Arsenal", "score2": "3", "estado": "Finalizado" },
                { "fase": "Semifinal 1", "team1": "Bayern Leverkusen", "score1": "1", "team2": "Wrexham", "score2": "0", "estado": "Finalizado" },
                { "fase": "Semifinal 2", "team1": "Inter de Milan", "score1": "2", "team2": "Arsenal", "score2": "0", "estado": "Finalizado" },
                { "fase": "Final", "team1": "Inter de Milan", "score1": "", "team2": "Arsenal", "score2": "", "estado": "Por Jugar" }
            ]

        # Default fallback values for UEFA Champions League if empty
        if not champions_matches:
            champions_matches = [
                { "fase": "Cuartos 1", "team1": "FC Barcelona", "score1": "2", "team2": "Real Madrid", "score2": "1", "estado": "Finalizado" },
                { "fase": "Cuartos 2", "team1": "AC Milan", "score1": "0", "team2": "Inter de Milan", "score2": "3", "estado": "Finalizado" },
                { "fase": "Cuartos 3", "team1": "Como 1907", "score1": "2", "team2": "Bayern Leverkusen", "score2": "1", "estado": "Finalizado" },
                { "fase": "Cuartos 4", "team1": "Arsenal", "score1": "1 (2)", "team2": "PSG", "score2": "1 (4)", "estado": "Finalizado" },
                { "fase": "Semifinal 1", "team1": "FC Barcelona", "score1": "1", "team2": "Inter de Milan", "score2": "3", "estado": "Finalizado" },
                { "fase": "Semifinal 2", "team1": "Como 1907", "score1": "2", "team2": "PSG", "score2": "0", "estado": "Finalizado" },
                { "fase": "Final", "team1": "Inter de Milan", "score1": "", "team2": "Como 1907", "score2": "", "estado": "Por Jugar" }
            ]

        # 5.6. Parse Mercado sheet if exists
        market_movements = []
        if 'Mercado' in sheet_xml_paths:
            print("💸 Cargando datos del mercado de fichajes...")
            mercado_sheet = parse_sheet_cells(z, sheet_xml_paths['Mercado'], strings)
            
            # Map headers dynamically
            header_map = {}
            for col_letter, val in mercado_sheet.get(1, {}).items():
                if val:
                    header_map[normalize_key(val)] = col_letter
                    
            col_jugador = header_map.get(normalize_key("Jugador"))
            col_tipo = header_map.get(normalize_key("Tipo"))
            col_origen = header_map.get(normalize_key("Origen"))
            col_destino = header_map.get(normalize_key("Destino"))
            col_costo = header_map.get(normalize_key("Costo")) or header_map.get(normalize_key("Precio")) or header_map.get(normalize_key("Valor"))
            col_temporadas = header_map.get(normalize_key("Temporadas"))
            col_detalle = header_map.get(normalize_key("Detalle")) or header_map.get(normalize_key("Detalles")) or header_map.get(normalize_key("Nota")) or header_map.get(normalize_key("Notas"))
            
            seen_movements = set()
            for row_idx in sorted(mercado_sheet.keys()):
                if row_idx == 1:
                    continue
                row = mercado_sheet[row_idx]
                player_name = row.get(col_jugador, '').strip() if col_jugador else ''
                if not player_name:
                    continue
                
                mov_type = row.get(col_tipo, '').strip() if col_tipo else ''
                orig_name = row.get(col_origen, '').strip() if col_origen else ''
                dest_name = row.get(col_destino, '').strip() if col_destino else ''
                cost_str = row.get(col_costo, '').strip() if col_costo else ''
                seasons_str = row.get(col_temporadas, '').strip() if col_temporadas else ''
                detail_str = row.get(col_detalle, '').strip() if col_detalle else ''
                
                # Normalize origin team
                from_team_id = None
                from_team_name = orig_name
                if orig_name:
                    norm_orig = normalize_key(orig_name)
                    mapped_orig = TEAM_ID_MAP.get(norm_orig, norm_orig)
                    if mapped_orig in teams_dict:
                        from_team_id = mapped_orig
                        from_team_name = teams_dict[mapped_orig]["name"]
                    else:
                        print(f"⚠️ Advertencia (Fila {row_idx}): Club de origen '{orig_name}' no mapeado formalmente.")
                
                # Normalize destination team
                to_team_id = None
                to_team_name = dest_name
                if dest_name:
                    norm_dest = normalize_key(dest_name)
                    mapped_dest = TEAM_ID_MAP.get(norm_dest, norm_dest)
                    if mapped_dest in teams_dict:
                        to_team_id = mapped_dest
                        to_team_name = teams_dict[mapped_dest]["name"]
                    else:
                        print(f"⚠️ Advertencia (Fila {row_idx}): Club de destino '{dest_name}' no mapeado formalmente.")
                
                # Parse cost
                try:
                    price = float(cost_str) if cost_str else 0.0
                except ValueError:
                    print(f"⚠️ Advertencia (Fila {row_idx}): No se pudo convertir el costo '{cost_str}' a número. Se asignará 0.0.")
                    price = 0.0
                    
                # Parse seasons
                try:
                    seasons = int(seasons_str) if seasons_str else None
                except ValueError:
                    print(f"⚠️ Advertencia (Fila {row_idx}): No se pudo convertir las temporadas '{seasons_str}' a entero. Se asignará null.")
                    seasons = None

                # Signature for duplicate check
                mov_sig = (
                    player_name.lower().strip(),
                    mov_type.lower().strip(),
                    (from_team_id or orig_name or "").lower().strip(),
                    (to_team_id or dest_name or "").lower().strip(),
                    price,
                    seasons
                )

                if mov_sig in seen_movements:
                    print(f"🚫 Movimiento repetido ignorado (Fila {row_idx}): {player_name} | {mov_type} | {from_team_name} -> {to_team_name}")
                    continue
                seen_movements.add(mov_sig)
                    
                market_movements.append({
                    "player": player_name,
                    "type": mov_type,
                    "fromTeamId": from_team_id,
                    "fromTeamName": from_team_name,
                    "toTeamId": to_team_id,
                    "toTeamName": to_team_name,
                    "price": price,
                    "seasons": seasons,
                    "details": detail_str
                })
        else:
            print("ℹ️ Hoja 'Mercado' no encontrada en Excel, se inicializará vacía.")
            if old_data and "marketMovements" in old_data:
                market_movements = old_data["marketMovements"]

        # 6. Rebuild final LMI Data object
        season = "Temporada 9 Finalizada"
        
        # Load rules from old data if present, and update 11-16 to 11-17
        rules = old_data.get("rules", []) if old_data else []
        if not rules:
            rules = [
                {
                    "category": "Reglamento de Renovaciones Temporada 9",
                    "items": [
                        "Posiciones 1 a 5 en Liga: Pagan el 50% de la suma total de su renovación.",
                        "Posiciones 6 a 10 en Liga: Pagan el 75% de la suma total de su renovación.",
                        "Posiciones 11 a 17 en Liga: Pagan el 100% de la suma total de su renovación.",
                        "El costo se consulta en fichajes.com (sueldo/estrellas). Sueldos de 600k o menores se cuentan como 1M.",
                        "Jugadores no renovados: Si no deseas renovar a un jugador, ingresa 0 en su sueldo/valor de renovación.",
                        "Jugadores Leyendas/Épicos/Big Time: Se mide según el Valor Global Máximo (ej. Pelé 108 = 108M). Maximum 1 Leyenda o Épico por club.",
                        "Si deseas cambiar o eliminar tu leyenda/épico/Big Time, debes pagar su renovación y anotar 'Cambio leyenda por ----' o 'Elimino mi leyenda ----'."
                    ]
                }
            ]
        else:
            for r in rules:
                if r.get("category") == "Reglamento de Renovaciones Temporada 9":
                    r["items"] = [item.replace("11 a 16", "11 a 17") for item in r.get("items", [])]

        final_data = {
            "season": season,
            "teams": list(teams_dict.values()),
            "players": players_list,
            "copaEstelarMatches": copa_matches,
            "championsLeagueMatches": champions_matches,
            "rules": rules,
            "nonRenewedPlayers": non_renewed_players,
            "marketMovements": market_movements
        }

        # 7. Write to data.js
        print("💾 Guardando resultados en 'data.js'...")
        js_content = f"// Base de datos unificada LMI Temporada 9 desde lmi temp 9.xlsx\n\nvar INITIAL_LMI_DATA = {json.dumps(final_data, indent=2, ensure_ascii=False)};\n"
        
        with open('data.js', 'w', encoding='utf-8') as f:
            f.write(js_content)

        print(f"✅ Base de datos procesada con éxito: {len(teams_dict)} equipos y {len(players_list)} jugadores importados.")

if __name__ == "__main__":
    process_excel()
