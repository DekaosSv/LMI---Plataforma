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
    "wrexham": "wrexham"
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
        ('CT', r'^(CT|DFC|DC|DF)\b[:\s]*'),
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
        match = re.search(r'const INITIAL_LMI_DATA = ({.*?});', content, re.DOTALL)
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
        required_sheets = ['BD', 'Lista', 'Registro Liga']
        for r_sheet in required_sheets:
            if r_sheet not in sheet_xml_paths:
                print(f"❌ Error: La hoja '{r_sheet}' es obligatoria en el Excel pero no se encontró.")
                print(f"Hojas disponibles: {list(sheet_xml_paths.keys())}")
                sys.exit(1)

        print("📑 Parseando hojas del Excel...")
        bd_data = parse_sheet_cells(z, sheet_xml_paths['BD'], strings)
        lista_data = parse_sheet_cells(z, sheet_xml_paths['Lista'], strings)
        registro_data = parse_sheet_cells(z, sheet_xml_paths['Registro Liga'], strings)

        # 3. Build Teams Dictionary (Based on Lista sheet headers)
        print("🛡️ Procesando equipos y asignando posiciones de la liga...")
        teams_dict = {}
        col_to_team_id = {}
        
        # Row 1 has headers (team names)
        row1_lista = lista_data.get(1, {})
        
        # Iterate over the 18 columns (A to R)
        for col_idx in range(18):
            col_letter = col_idx_to_letter(col_idx)
            raw_team_name = row1_lista.get(col_letter, '').strip()
            if not raw_team_name:
                continue
                
            norm_tname = normalize_key(raw_team_name)
            team_id = TEAM_ID_MAP.get(norm_tname, norm_tname)
            
            # Map column letter to team ID
            col_to_team_id[col_letter] = team_id
            
            # Position is column order (1-based index)
            rank = col_idx + 1
            
            # Preserve old team metadata or fallback to default
            if team_id in old_teams:
                team_obj = old_teams[team_id].copy()
                team_obj["leagueRank"] = rank
                # Ensure stadium and manager are present
                if "stadium" not in team_obj: team_obj["stadium"] = f"Estadio {raw_team_name}"
                if "manager" not in team_obj: team_obj["manager"] = "Director Técnico"
                if "budget" not in team_obj: team_obj["budget"] = 100000000
                if "initialBudget" not in team_obj: team_obj["initialBudget"] = 100000000
            else:
                team_obj = {
                    "id": team_id,
                    "name": raw_team_name,
                    "shortName": raw_team_name[:3].upper(),
                    "leagueRank": rank,
                    "logo": f"Logos Equipos/{team_id}.png",
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
            teams_dict[team_id] = team_obj

        # 4. Build Players List from BD (clean name) & Lista (positions)
        print("⚽ Procesando plantillas de los clubes...")
        players_list = []
        player_id_counter = 1
        
        # Max rows in excel rosters is typically under 50, but we can loop up to 100
        for row_idx in range(2, 101):
            row_bd = bd_data.get(row_idx, {})
            row_lista = lista_data.get(row_idx, {})
            
            # Check each of the columns
            for col_idx in range(18):
                col_letter = col_idx_to_letter(col_idx)
                if col_letter not in col_to_team_id:
                    continue
                    
                team_id = col_to_team_id[col_letter]
                bd_name = row_bd.get(col_letter, '').strip()
                lista_raw = row_lista.get(col_letter, '').strip()
                
                # Check if player exists in this cell
                if bd_name or lista_raw:
                    # Clean/extract position prefix from Lista cell
                    pos, clean_lista_name = extraer_posicion_y_nombre(lista_raw)
                    
                    # Use BD name as the clean name, fallback to Lista name if BD is empty
                    player_name = bd_name if bd_name else clean_lista_name
                    
                    if player_name:
                        # Normalize key for looking up old properties
                        norm_pname = normalize_key(player_name)
                        
                        # Preserve old isLegend or price if they exist
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
                            "price": price,
                            "isLegend": is_legend
                        })
                        player_id_counter += 1

        # Helper map to find players quickly in stats mapping
        players_by_norm = {}
        for p in players_list:
            players_by_norm[normalize_key(p["name"])] = p

        # 5. Map Goals & Assists from 'Registro Liga' sheet
        print("📈 Importando estadísticas de goles y asistencias desde 'Registro Liga'...")
        
        # Registro Liga sheet: Row 1 = Headers (Equipo, Jugador, Goles, Asistencias)
        # Columns: A=Equipo, B=Jugador, C=Goles, D=Asistencias
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
                # Matched player! Add stats
                players_by_norm[norm_reg_pname]["goals"] += goles
                players_by_norm[norm_reg_pname]["assists"] += asists
            else:
                # Unmatched player! Create a new player in their team
                print(f"  ℹ️ Jugador extra en Registro Liga (no estaba en plantilla): '{raw_pname}' ({raw_tname})")
                
                # Check fallback position from old database
                pos = "MC"
                price = 5000000
                is_legend = False
                
                if norm_reg_pname in old_players_by_norm:
                    old_p = old_players_by_norm[norm_reg_pname]
                    pos = old_p.get("position", "MC")
                    price = old_p.get("price", 5000000)
                    is_legend = old_p.get("isLegend", False)
                    
                new_player = {
                    "id": f"p_{player_id_counter}",
                    "name": raw_pname,
                    "position": pos,
                    "teamId": team_id,
                    "goals": goles,
                    "assists": asists,
                    "price": price,
                    "isLegend": is_legend
                }
                players_list.append(new_player)
                players_by_norm[norm_reg_pname] = new_player
                player_id_counter += 1

        # 6. Rebuild final LMI Data object
        season = old_data.get("season", "Temporada 9 en Curso") if old_data else "Temporada 9 en Curso"
        rules = old_data.get("rules", [
            {
                "category": "Reglamento de Renovaciones Temporada 9",
                "items": [
                    "Posiciones 1 a 5 en Liga: Pagan el 50% de la suma total de su renovación.",
                    "Posiciones 6 a 10 en Liga: Pagan el 75% de la suma total de su renovación.",
                    "Posiciones 11 a 16 en Liga: Pagan el 100% de la suma total de su renovación.",
                    "El costo se consulta en fichajes.com (sueldo/estrellas). Sueldos de 600k o menores se cuentan como 1M.",
                    "Jugadores Leyendas/Épicos/Big Time: Se mide según el Valor Global Máximo (ej. Pelé 108 = 108M). Maximum 1 Leyenda o Épico por club.",
                    "Si deseas cambiar o eliminar tu leyenda/épico/Big Time, debes pagar su renovación y anotar 'Cambio leyenda por ----' o 'Elimino mi leyenda ----'."
                ]
            }
        ]) if old_data else [
            {
                "category": "Reglamento de Renovaciones Temporada 9",
                "items": [
                    "Posiciones 1 a 5 en Liga: Pagan el 50% de la suma total de su renovación.",
                    "Posiciones 6 a 10 en Liga: Pagan el 75% de la suma total de su renovación.",
                    "Posiciones 11 a 16 en Liga: Pagan el 100% de la suma total de su renovación.",
                    "El costo se consulta en fichajes.com (sueldo/estrellas). Sueldos de 600k o menores se cuentan como 1M.",
                    "Jugadores Leyendas/Épicos/Big Time: Se mide según el Valor Global Máximo (ej. Pelé 108 = 108M). Maximum 1 Leyenda o Épico por club.",
                    "Si deseas cambiar o eliminar tu leyenda/épico/Big Time, debes pagar su renovación y anotar 'Cambio leyenda por ----' o 'Elimino mi leyenda ----'."
                ]
            }
        ]

        final_data = {
            "season": season,
            "teams": list(teams_dict.values()),
            "players": players_list,
            "rules": rules
        }

        # 7. Write to data.js
        print("💾 Guardando resultados en 'data.js'...")
        js_content = f"// Base de datos unificada LMI Temporada 9 desde lmi temp 9.xlsx\n\nconst INITIAL_LMI_DATA = {json.dumps(final_data, indent=2, ensure_ascii=False)};\n"
        
        with open('data.js', 'w', encoding='utf-8') as f:
            f.write(js_content)

        print(f"✅ Base de datos procesada con éxito: {len(teams_dict)} equipos y {len(players_list)} jugadores importados.")

if __name__ == "__main__":
    process_excel()
