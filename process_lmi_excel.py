import zipfile
import xml.etree.ElementTree as ET
import json
import os
import re
import sys
import unicodedata
import glob
import difflib
import time

def find_lmi_excel_file():
    # Prioridad explícita a LMI Base.xlsx si existe
    if os.path.exists('LMI Base.xlsx'):
        return 'LMI Base.xlsx'
        
    candidates = []
    for p in ['LMI Base*.xlsx', 'lmi temp *.xlsx', 'LMI*.xlsx', 'lmi*.xlsx', '*.xlsx']:
        for f in glob.glob(p):
            base = os.path.basename(f)
            if base.startswith('~$') or base.lower() == 'presupuestos.xlsx':
                continue
            if f not in candidates:
                candidates.append(f)
    
    if candidates:
        candidates.sort(key=lambda x: os.path.getmtime(x), reverse=True)
        return candidates[0]
        
    if os.path.exists('lmi temp 10.xlsx'):
        return 'lmi temp 10.xlsx'
    return None


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
    "atleticomadrid": "atleticodemadrid",
    "borussiadortmund": "borussiadortmund",
    "borussia": "borussiadortmund",
    "riverplate": "riverplate",
    "river": "riverplate",
    "casapiaac": "casapiaac",
    "casapia": "casapiaac",
    "casa_pia_ac": "casapiaac",
    "urawareddiamonds": "urawareddiamonds",
    "urawareds": "urawareddiamonds",
    "urawa_red_diamonds": "urawareddiamonds",
    "clubamerica": "clubamerica",
    "clubamrica": "clubamerica",
    "america": "clubamerica"
}

def normalize_key(name):
    if not name: return ""
    # Normalize unicode accents and lower
    nfkd_form = unicodedata.normalize('NFKD', str(name))
    only_ascii = "".join([c for c in nfkd_form if not unicodedata.combining(c)])
    # Remove common suffixes like (p), (P), (c), (C)
    clean = re.sub(r'\s*\([pPcC]\)\s*$', '', only_ascii)
    return re.sub(r'[^a-zA-Z0-9]', '', clean).lower()

def parse_fallback_campeones_txt():
    txt_path = "Sala de campeones/campeones.txt"
    if not os.path.exists(txt_path):
        print("⚠️ Advertencia: No se encontró 'Sala de campeones/campeones.txt'.")
        return []
    records = []
    current_tournament = None
    with open(txt_path, 'r', encoding='utf-8') as f:
        for line in f:
            line = line.strip()
            if not line:
                continue
            line_upper = line.upper()
            if "LMI" in line_upper and "CAMPEONES" in line_upper:
                current_tournament = "Liga LMI"
                continue
            elif "CHAMPIONS" in line_upper:
                current_tournament = "Champions League"
                continue
            elif "COPA ESTELAR" in line_upper:
                current_tournament = "Copa Estelar"
                continue
            if line.startswith("Campeones LMI") and not line.startswith("@"):
                continue
            if current_tournament and ("🏆" in line or "🥇" in line):
                trophies_count = line.count("🏆")
                if "-" in line:
                    user_part = line.split("-")[0]
                else:
                    user_part = re.sub(r'[🏆🥇💫\s]+$', '', line)
                # Remove unicode formatting characters and clean username
                username = user_part.replace('\u2068', '').replace('\u2069', '').strip().lstrip('@').strip()
                if username:
                    records.append({
                        "torneo": current_tournament,
                        "ganador": username,
                        "cantidad": trophies_count
                    })
    print(f"📖 Fallback: Se cargaron {len(records)} registros desde 'campeones.txt'.")
    return records


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

def run_preflight_audit(teams_dict, players_list, audit_stats):
    critical_errors = []
    warnings = []
    
    # 1. Validación de Clubes
    total_teams = len(teams_dict)
    if total_teams < 2:
        critical_errors.append(f"Número insuficiente de clubes: {total_teams} encontrados.")
        
    # 2. Validación de Plantillas (23 jugadores exactos por club)
    players_by_team = {}
    for p in players_list:
        tid = p["teamId"]
        players_by_team.setdefault(tid, []).append(p)
        
    for tid, t_obj in teams_dict.items():
        p_count = len(players_by_team.get(tid, []))
        tname = t_obj.get("name", tid)
        if p_count != 23:
            critical_errors.append(f"Club '{tname}' ({tid}) tiene {p_count} jugadores (se esperan exactamente 23)")
            
    # 3. Validación de Porteros (PT)
    for tid, t_obj in teams_dict.items():
        t_players = players_by_team.get(tid, [])
        pt_count = sum(1 for p in t_players if p.get("position") == "PT")
        tname = t_obj.get("name", tid)
        if pt_count == 0:
            critical_errors.append(f"Club '{tname}' ({tid}) NO TIENE PORTERO (PT) asignado!")
            
    # 4. Validación de Jugadores Duplicados
    seen_names = {}
    for p in players_list:
        norm = normalize_key(p["name"])
        if norm in seen_names:
            p_prev = seen_names[norm]
            critical_errors.append(f"Jugador duplicado: '{p['name']}' figura en '{p['teamId']}' y '{p_prev['teamId']}'")
        else:
            seen_names[norm] = p
            
    # 5. Validación de Jugadores con prefijo de posición vacío
    for p in players_list:
        if not p.get("position"):
            warnings.append(f"Jugador '{p['name']}' no tiene posición definida")
            
    # Imprimir semáforo visual
    print("\n" + "=" * 70)
    print("🛡️  AUDITORÍA PRE-VUELO LMI - PLATAFORMA WEB")
    print("=" * 70)
    
    expected_players = total_teams * 23
    print(f" [🟢 OK] {total_teams} Clubes registrados y posicionados en la liga.")
        
    total_players = len(players_list)
    has_roster_error = any("se esperan exactamente 23" in e for e in critical_errors)
    if total_players == expected_players and not has_roster_error:
        print(f" [🟢 OK] {total_players} Jugadores validados (exactamente 23 por cada uno de los {total_teams} clubes).")
    else:
        print(f" [🔴 ERROR] Plantillas desajustadas (Total jugadores: {total_players}, esperados: {expected_players}).")
        
    has_gk_error = any("NO TIENE PORTERO" in e for e in critical_errors)
    if not has_gk_error:
        print(" [🟢 OK] Todos los clubes cuentan con al menos un Portero (PT) disponible.")
    else:
        print(" [🔴 ERROR] Hay clubes sin portero registrado.")
        
    has_dup_error = any("duplicado" in e for e in critical_errors)
    if not has_dup_error:
        print(" [🟢 OK] 0 Jugadores duplicados en toda la liga.")
    else:
        print(" [🔴 ERROR] Se detectaron jugadores duplicados entre clubes.")
        
    if audit_stats.get("transferred"):
        print(f" [🟢 OK] {len(audit_stats['transferred'])} Estadísticas de jugadores cedidos/traspasados calculadas correctamente.")
        
    if audit_stats.get("fuzzy"):
        print(f" [✨ INFO] {len(audit_stats['fuzzy'])} Nombres con variación tipográfica vinculados automáticamente.")
        
    if audit_stats.get("unassigned"):
        unassigned_names = set(u["player"] for u in audit_stats["unassigned"])
        print(f" [ℹ️ INFO] {len(audit_stats['unassigned'])} Registros de partidos archivados para {len(unassigned_names)} jugadores fuera de la liga.")
        
    print("=" * 70)
    
    # Manejo de errores críticos
    if critical_errors:
        print("\n❌ SE DETECTARON ERRORES CRÍTICOS QUE IMPIDEN EL DESPLIEGUE:")
        for err in critical_errors:
            print(f"   ⛔ {err}")
        print("\n🔒 Por seguridad, la base de datos 'data.js' NO fue modificada.")
        print("Por favor corrige los datos en 'LMI Base.xlsx' antes de reintentar.\n")
        return False
        
    if warnings:
        print("\n⚠️ Advertencias no críticas:")
        for w in warnings:
            print(f"   🔸 {w}")
            
    return True

def process_excel():
    excel_file = find_lmi_excel_file()
    if not excel_file or not os.path.exists(excel_file):
        print("❌ Error: No se encontró ningún archivo Excel de la LMI en la ruta.")
        sys.exit(1)

    print(f"🔄 Iniciando proceso de importación del Excel '{excel_file}'...")
    
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
    with zipfile.ZipFile(excel_file, 'r') as z:
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
        campeones_excel_data = parse_sheet_cells(z, sheet_xml_paths['Campeones'], strings) if 'Campeones' in sheet_xml_paths else {}
        renovaciones_excel_data = parse_sheet_cells(z, sheet_xml_paths['Renovaciones'], strings) if 'Renovaciones' in sheet_xml_paths else {}

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
        
        # Iterar sobre las columnas de equipos (hasta 30 columnas: A a AD)
        for col_idx in range(30):
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
            if team_id == "borussiadortmund" and (not current_logo or not os.path.exists(current_logo)):
                current_logo = "Logos Equipos/borussia.webp"
            if team_id in ["casapiaac", "casapia", "casa_pia_ac"] and (not current_logo or not os.path.exists(current_logo)):
                current_logo = "Logos Equipos/casapia.webp"
            if team_id in ["urawareddiamonds", "urawareds", "urawa_red_diamonds"] and (not current_logo or not os.path.exists(current_logo)):
                current_logo = "Logos Equipos/urawareds.png"
            if team_id in ["clubamerica", "america", "clubamrica"] and (not current_logo or not os.path.exists(current_logo)):
                current_logo = "Logos Equipos/clubamerica.png"
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
            else:
                team_obj["logo"] = current_logo
            
            teams_dict[team_id] = team_obj

        # 4. Construir lista de Jugadores estrictamente desde la hoja Lista (nombres y posiciones)
        print("⚽ Procesando plantillas de los clubes...")
        players_list = []
        player_id_counter = 1

        # 4.1. Procesar datos de la hoja 'Renovaciones' si existe
        renovaciones_by_team = {}
        if renovaciones_excel_data:
            print("🌟 Procesando hoja 'Renovaciones' (Épicos y Big Time)...")
            for r_idx in sorted(renovaciones_excel_data.keys()):
                row = renovaciones_excel_data[r_idx]
                for col_idx in range(30):
                    c1 = col_idx_to_letter(col_idx)
                    c2 = col_idx_to_letter(col_idx + 1)
                    c3 = col_idx_to_letter(col_idx + 2)
                    v2 = row.get(c2, '').strip().lower()
                    v3 = row.get(c3, '').strip().lower()
                    if v2 == 'tipo' and v3 == 'valor':
                        raw_team = row.get(c1, '').strip()
                        if not raw_team:
                            continue
                        norm_team = normalize_key(raw_team)
                        tid = TEAM_ID_MAP.get(norm_team, norm_team)
                        if tid not in renovaciones_by_team:
                            renovaciones_by_team[tid] = []
                        
                        curr_r = r_idx + 1
                        while curr_r in renovaciones_excel_data:
                            r_player = renovaciones_excel_data[curr_r].get(c1, '').strip()
                            r_type = renovaciones_excel_data[curr_r].get(c2, '').strip()
                            r_val = renovaciones_excel_data[curr_r].get(c3, '').strip()
                            
                            if r_type.lower() == 'tipo' and r_val.lower() == 'valor':
                                break
                            if not r_player:
                                break
                                
                            pos_r, name_r = extraer_posicion_y_nombre(r_player)
                            try:
                                val_num = float(r_val)
                            except (ValueError, TypeError):
                                val_num = 5.0
                                
                            card_type = 'Epico' if 'epic' in r_type.lower() else ('Big Time' if 'big' in r_type.lower() else r_type)
                            renovaciones_by_team[tid].append({
                                "raw": r_player,
                                "name": name_r,
                                "pos": pos_r,
                                "cardType": card_type,
                                "val": val_num,
                                "price": int(val_num * 1000000),
                                "matched": False
                            })
                            curr_r += 1
            print(f"  ✨ Se identificaron Épicos y Big Time para {len(renovaciones_by_team)} clubes.")
        
        # El roster de jugadores va desde la fila 2 hasta la 25 (para no mezclar con la lista de No Renovados en la fila 26+)
        for row_idx in range(2, 26):
            row_lista = lista_data.get(row_idx, {})
            
            # Recorrer cada columna activa de la hoja Lista
            for col_idx in range(30):
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
                        
                        # Buscar si el jugador está en la hoja Renovaciones para este club
                        matched_renov = None
                        if team_id in renovaciones_by_team:
                            for entry in renovaciones_by_team[team_id]:
                                norm_entry = normalize_key(entry["name"])
                                norm_entry_raw = normalize_key(entry["raw"])
                                if norm_pname == norm_entry or norm_pname == norm_entry_raw or norm_entry in norm_pname or norm_pname in norm_entry:
                                    matched_renov = entry
                                    entry["matched"] = True
                                    break
                        
                        if matched_renov:
                            card_type = matched_renov["cardType"]
                            is_legend = True
                            price = matched_renov["price"]
                        else:
                            # Preservar precio, isLegend y cardType si existía en data.js
                            is_legend = False
                            card_type = "Normal"
                            price = 5000000
                            if norm_pname in old_players_by_norm:
                                old_p = old_players_by_norm[norm_pname]
                                is_legend = old_p.get("isLegend", False)
                                card_type = old_p.get("cardType", "Normal")
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
                            "cardType": card_type,
                            "isLegend": is_legend
                        })
                        player_id_counter += 1

        # 4.2. Incorporar jugadores presentes en Renovaciones que no figuraban en Lista (ej. Fabio Cannavaro)
        for tid, r_entries in renovaciones_by_team.items():
            for entry in r_entries:
                if not entry.get("matched"):
                    print(f"  ➕ Agregando a {tid} jugador especial de Renovaciones no listado en plantilla: {entry['name']} ({entry['pos'] or 'DC'}) - {entry['cardType']} ${entry['val']}M")
                    players_list.append({
                        "id": f"p_{player_id_counter}",
                        "name": entry["name"],
                        "position": entry["pos"] or "DC",
                        "teamId": tid,
                        "goals": 0,
                        "assists": 0,
                        "goals_liga": 0,
                        "assists_liga": 0,
                        "goals_champions": 0,
                        "assists_champions": 0,
                        "goals_estelar": 0,
                        "assists_estelar": 0,
                        "price": entry["price"],
                        "cardType": entry["cardType"],
                        "isLegend": True
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
        
        audit_stats = {
            "direct": 0,
            "transferred": [],
            "fuzzy": [],
            "unassigned": []
        }

        def map_tournament_stats(registro_data, key_goals, key_assists, sheet_name):
            for row_idx in sorted(registro_data.keys()):
                if row_idx == 1:
                    continue # Skip header
                    
                row = registro_data[row_idx]
                raw_pname = row.get('B', '').strip()
                raw_tname = row.get('A', '').strip()
                
                if not raw_pname:
                    continue
                    
                goles = int(row.get('C', 0)) if str(row.get('C', '')).isdigit() else 0
                asists = int(row.get('D', 0)) if str(row.get('D', '')).isdigit() else 0
                
                if goles == 0 and asists == 0:
                    continue
                
                # Normalize names to find match
                norm_reg_pname = normalize_key(raw_pname)
                norm_tname = normalize_key(raw_tname)
                team_id = TEAM_ID_MAP.get(norm_tname, norm_tname)
                
                # 1. Búsqueda exacta en plantilla
                player = players_by_norm.get(norm_reg_pname)
                
                # 2. Coincidencia difusa inteligente si no se encuentra exacto
                if not player:
                    close_matches = difflib.get_close_matches(norm_reg_pname, players_by_norm.keys(), n=1, cutoff=0.85)
                    if close_matches:
                        player = players_by_norm[close_matches[0]]
                        audit_stats["fuzzy"].append((raw_pname, player["name"], sheet_name))
                        print(f"  ✨ Coincidencia inteligente: '{raw_pname}' vinculada a '{player['name']}' ({sheet_name})")

                if player:
                    player[key_goals] += goles
                    player[key_assists] += asists
                    if player["teamId"] == team_id:
                        audit_stats["direct"] += 1
                    else:
                        audit_stats["transferred"].append({
                            "player": player["name"],
                            "from_team": raw_tname,
                            "current_team": player["teamId"],
                            "goals": goles,
                            "assists": asists,
                            "sheet": sheet_name
                        })
                        print(f"  🔄 Estadística asignada por cesión/traspaso: '{player['name']}' ({goles}G, {asists}A con {raw_tname} -> asignado a '{player['teamId']}')")
                else:
                    audit_stats["unassigned"].append({
                        "player": raw_pname,
                        "team": raw_tname,
                        "goals": goles,
                        "assists": asists,
                        "sheet": sheet_name
                    })

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
                { "fase": "Cuartos 2", "team1": "Como 1907", "score1": "0", "team2": "Boca Juniors", "score2": "1", "estado": "Finalizado" },
                { "fase": "Cuartos 3", "team1": "Inter de Milan", "score1": "2", "team2": "AC Milan", "score2": "0", "estado": "Finalizado" },
                { "fase": "Cuartos 4", "team1": "Bayern Leverkusen", "score1": "1", "team2": "Arsenal", "score2": "3", "estado": "Finalizado" },
                { "fase": "Semifinal 1", "team1": "Bayern Leverkusen", "score1": "1", "team2": "Boca Juniors", "score2": "0", "estado": "Finalizado" },
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
                    elif mapped_orig in clubes_excel_data:
                        from_team_id = mapped_orig
                        from_team_name = orig_name
                    elif mapped_orig in TEAM_ID_MAP.values():
                        from_team_id = mapped_orig
                        from_team_name = orig_name
                    else:
                        from_team_id = mapped_orig if mapped_orig else None
                        from_team_name = orig_name
                
                # Normalize destination team
                to_team_id = None
                to_team_name = dest_name
                if dest_name:
                    norm_dest = normalize_key(dest_name)
                    mapped_dest = TEAM_ID_MAP.get(norm_dest, norm_dest)
                    if mapped_dest in teams_dict:
                        to_team_id = mapped_dest
                        to_team_name = teams_dict[mapped_dest]["name"]
                    elif mapped_dest in clubes_excel_data:
                        to_team_id = mapped_dest
                        to_team_name = dest_name
                    elif mapped_dest in TEAM_ID_MAP.values():
                        to_team_id = mapped_dest
                        to_team_name = dest_name
                    else:
                        to_team_id = mapped_dest if mapped_dest else None
                        to_team_name = dest_name
                
                # Parse cost
                try:
                    price = float(cost_str) if cost_str else 0.0
                except ValueError:
                    price = 0.0
                    
                # Parse seasons
                seasons = None
                if seasons_str:
                    s_clean = seasons_str.strip()
                    if s_clean.lower() in ['permanente', 'permanentes', 'perm', 'definitivo', 'definitiva']:
                        seasons = "Permanente"
                    elif s_clean.isdigit():
                        seasons = int(s_clean)
                    else:
                        seasons = s_clean

                # Signature for duplicate check (checking player, origin, destination, price, and seasons)
                mov_sig = (
                    player_name.lower().strip(),
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

        # 5.5. Parse champions if the sheet exists, otherwise fallback to TXT
        champions_list = []
        if campeones_excel_data:
            print("🏆 Procesando campeones desde la hoja 'Campeones'...")
            header_map = {}
            for col_letter, val in campeones_excel_data.get(1, {}).items():
                if val:
                    header_map[normalize_key(val)] = col_letter
            
            col_torneo = header_map.get(normalize_key("Torneo"))
            col_ganador = header_map.get(normalize_key("Ganador"))
            col_cantidad = header_map.get(normalize_key("Cantidad"))
            
            for row_idx in sorted(campeones_excel_data.keys()):
                if row_idx == 1:
                    continue
                row = campeones_excel_data[row_idx]
                torneo = row.get(col_torneo, '').strip() if col_torneo else ''
                ganador = row.get(col_ganador, '').strip() if col_ganador else ''
                cantidad_raw = row.get(col_cantidad, '').strip() if col_cantidad else '0'
                
                if torneo and ganador:
                    try:
                        cantidad = int(float(cantidad_raw))
                    except ValueError:
                        cantidad = 0
                    champions_list.append({
                        "torneo": torneo,
                        "ganador": ganador,
                        "cantidad": cantidad
                    })
        
        # Fallback to txt file if no records found or sheet doesn't exist
        if not champions_list:
            print("🏆 Hoja 'Campeones' no encontrada o vacía. Cargando fallback desde campeones.txt...")
            champions_list = parse_fallback_campeones_txt()

        # 6. Rebuild final LMI Data object
        season = "Temporada 10"
        
        # Load rules from old data if present, and update 11-16 to 11-17
        rules = old_data.get("rules", []) if old_data else []
        if not rules:
            rules = [
                {
                    "category": "Reglamento de Renovaciones Temporada 10",
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
                if r.get("category") in ["Reglamento de Renovaciones Temporada 9", "Reglamento de Renovaciones Temporada 10"]:
                    r["category"] = "Reglamento de Renovaciones Temporada 10"
                    r["items"] = [item.replace("11 a 16", "11 a 17") for item in r.get("items", [])]

        final_data = {
            "season": season,
            "teams": list(teams_dict.values()),
            "players": players_list,
            "copaEstelarMatches": copa_matches,
            "championsLeagueMatches": champions_matches,
            "rules": rules,
            "nonRenewedPlayers": non_renewed_players,
            "marketMovements": market_movements,
            "champions": champions_list
        }

        # 6.5. Auditoría Pre-Vuelo y Semáforo de Control
        is_clean = run_preflight_audit(teams_dict, players_list, audit_stats)
        if not is_clean:
            print("\n❌ La auditoría detectó errores críticos. El archivo 'data.js' NO se modificó.")
            sys.exit(1)
            
        auto_approve = any(arg in sys.argv for arg in ['--yes', '-y', '--auto'])
        if not auto_approve:
            print("\n🚀 Estado del sistema: EXCELENTE Y LISTO PARA PRODUCCIÓN")
            try:
                resp = input("¿Deseas guardar los cambios y actualizar la web? (S/N) [S]: ").strip().lower()
            except (EOFError, KeyboardInterrupt):
                resp = "s"
            if resp and resp not in ['s', 'si', 'y', 'yes']:
                print("\n⏸️ Operación cancelada por el usuario. No se modificó data.js ni se subió a producción.\n")
                sys.exit(2)

        # 7. Write to data.js
        print("\n💾 Guardando resultados en 'data.js'...")
        js_content = f"// Base de datos unificada LMI Temporada 10 desde {excel_file}\n\nvar INITIAL_LMI_DATA = {json.dumps(final_data, indent=2, ensure_ascii=False)};\n"
        
        with open('data.js', 'w', encoding='utf-8') as f:
            f.write(js_content)

        # Actualizar cache-buster en index.html para evitar caché obsoleto en navegadores
        if os.path.exists('index.html'):
            try:
                with open('index.html', 'r', encoding='utf-8') as f:
                    html_code = f.read()
                new_version = str(int(time.time()))
                html_code = re.sub(r'data\.js(?:\?v=[^"\'\s>]+)?', f'data.js?v={new_version}', html_code)
                html_code = re.sub(r'app\.js(?:\?v=[^"\'\s>]+)?', f'app.js?v={new_version}', html_code)
                with open('index.html', 'w', encoding='utf-8') as f:
                    f.write(html_code)
                print(f"🔄 Versión de caché web actualizada en 'index.html' (v={new_version}).")
            except Exception as e:
                print(f"⚠️ No se pudo actualizar el cache-buster en index.html: {e}")

        print(f"✅ Base de datos procesada con éxito: {len(teams_dict)} equipos y {len(players_list)} jugadores importados.")

if __name__ == "__main__":
    process_excel()
