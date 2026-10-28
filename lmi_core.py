# -*- coding: utf-8 -*-
"""
LMI Core Engine - Motor de Auditoría, Verificación y Operaciones de la Liga
Utilizado por el Bot de Telegram / DeepSeek Agent y el CLI administrativo.
"""

import os
import sys
import json
import shutil
import subprocess
from datetime import datetime

try:
    if hasattr(sys.stdout, 'reconfigure'):
        sys.stdout.reconfigure(encoding='utf-8', errors='replace')
    if hasattr(sys.stderr, 'reconfigure'):
        sys.stderr.reconfigure(encoding='utf-8', errors='replace')
except Exception:
    pass

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
DATA_JS_PATH = os.path.join(BASE_DIR, "data.js")
DATA_BACKUP_PATH = os.path.join(BASE_DIR, "data.backup.js")

VALID_POSITIONS = ["PT", "CT", "LD", "LI", "MCD", "MC", "ID", "II", "MP", "SD", "ED", "EI", "DC"]

def read_lmi_data():
    """Lee y parsea la base de datos de data.js"""
    if not os.path.exists(DATA_JS_PATH):
        raise FileNotFoundError(f"No se encontró {DATA_JS_PATH}")
    
    with open(DATA_JS_PATH, "r", encoding="utf-8") as f:
        content = f.read()

    prefix = "var INITIAL_LMI_DATA = "
    idx = content.find(prefix)
    if idx == -1:
        raise ValueError("Prefijo 'var INITIAL_LMI_DATA = ' no encontrado en data.js")
    
    start_json = idx + len(prefix)
    fb = content.find("{", start_json)
    if fb == -1:
        raise ValueError("JSON de data.js no encontrado tras el prefijo")

    data_obj, _ = json.JSONDecoder().raw_decode(content[fb:])
    return data_obj

def write_lmi_data(data_obj):
    """Guarda data.js con respaldo automático en data.backup.js"""
    # 1. Crear respaldo si data.js existe
    if os.path.exists(DATA_JS_PATH):
        try:
            shutil.copyfile(DATA_JS_PATH, DATA_BACKUP_PATH)
        except Exception as e:
            print(f"Advertencia al crear backup: {e}")

    # 2. Guardar archivo con formato idéntico al estándar
    out = "// Base de datos unificada LMI Temporada 10\n\nvar INITIAL_LMI_DATA = " + json.dumps(data_obj, indent=2, ensure_ascii=False) + ";\n\nif (typeof window !== 'undefined') {\n  window.lmiData = INITIAL_LMI_DATA;\n}\n"
    with open(DATA_JS_PATH, "w", encoding="utf-8") as f:
        f.write(out)
    return True

# =========================================================================
# 1. AUDITORÍA: JUGADORES DUPLICADOS
# =========================================================================
def find_duplicate_players(data=None):
    """
    Detecta si existen jugadores duplicados en la base de datos (por nombre idéntico o normalizado).
    Retorna un diccionario detallado con las apariciones y clubes.
    """
    if data is None:
        data = read_lmi_data()
    
    players = data.get("players", [])
    teams_map = {t["id"]: t["name"] for t in data.get("teams", [])}

    names_map = {}
    for p in players:
        raw_name = p.get("name", "").strip()
        norm_key = raw_name.lower()
        if not norm_key:
            continue
        
        team_id = p.get("teamId", "")
        team_name = teams_map.get(team_id, team_id or "Sin Club")
        
        entry = {
            "id": p.get("id"),
            "name": raw_name,
            "position": p.get("position"),
            "teamId": team_id,
            "teamName": team_name,
            "cardType": p.get("cardType", "Normal")
        }
        names_map.setdefault(norm_key, []).append(entry)

    duplicates = []
    for norm_key, plist in names_map.items():
        if len(plist) > 1:
            duplicates.append({
                "playerName": plist[0]["name"],
                "count": len(plist),
                "occurrences": plist
            })

    return duplicates

# =========================================================================
# 2. AUDITORÍA GENERAL DE LA LIGA
# =========================================================================
def audit_league_integrity(data=None):
    """
    Ejecuta una auditoría integral sobre:
    - Jugadores duplicados
    - Posiciones no oficiales (fuera de las 13)
    - Conteo de plantillas por club (alerta si != 23)
    - Verificación de imágenes y logos
    - Préstamos de mercado
    """
    if data is None:
        data = read_lmi_data()

    report = {
        "timestamp": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
        "totalTeams": len(data.get("teams", [])),
        "totalPlayers": len(data.get("players", [])),
        "duplicates": find_duplicate_players(data),
        "invalidPositions": [],
        "rosterAnomalies": [],
        "missingImages": [],
        "marketSummary": {
            "totalMovements": len(data.get("marketMovements", [])),
            "loans": []
        }
    }

    teams = data.get("teams", [])
    players = data.get("players", [])
    
    # 1. Contar jugadores por club
    roster_counts = {}
    for t in teams:
        roster_counts[t["id"]] = {"team": t, "count": 0, "players": []}

    # 2. Validar posiciones de jugadores
    for p in players:
        tid = p.get("teamId")
        if tid in roster_counts:
            roster_counts[tid]["count"] += 1
            roster_counts[tid]["players"].append(p)
        
        pos = p.get("position", "")
        if pos not in VALID_POSITIONS:
            report["invalidPositions"].append({
                "id": p.get("id"),
                "name": p.get("name"),
                "position": pos,
                "teamId": tid
            })

    # 3. Detectar anomalías en tamaño de plantillas (esperado: 23 jugadores)
    for tid, info in roster_counts.items():
        if info["count"] != 23:
            report["rosterAnomalies"].append({
                "teamId": tid,
                "teamName": info["team"].get("name", tid),
                "division": info["team"].get("division", "oro"),
                "playerCount": info["count"],
                "difference": info["count"] - 23
            })

    # 4. Validar existencia física de imágenes (logos principales)
    for t in teams:
        logo_path = t.get("logo", "")
        if logo_path:
            full_path = os.path.join(BASE_DIR, logo_path.replace("/", os.sep))
            if not os.path.exists(full_path):
                report["missingImages"].append({
                    "team": t.get("name"),
                    "type": "Logo",
                    "path": logo_path
                })

    for bdo in data.get("balonOro", []):
        img_path = bdo.get("image", "")
        if img_path:
            full_path = os.path.join(BASE_DIR, img_path.replace("/", os.sep))
            if not os.path.exists(full_path):
                report["missingImages"].append({
                    "player": bdo.get("player"),
                    "type": "Balón de Oro",
                    "path": img_path
                })

    # 5. Préstamos en mercado
    for m in data.get("marketMovements", []):
        if "prestamo" in (m.get("type") or "").lower():
            report["marketSummary"]["loans"].append({
                "player": m.get("player"),
                "from": m.get("fromTeamName"),
                "to": m.get("toTeamName"),
                "seasons": m.get("seasons", 1)
            })

    return report

# =========================================================================
# 3. REGISTRO DE PARTIDOS (MATCH ENGINE)
# =========================================================================
def register_match_result(competition, team1_identifier, team2_identifier, score1, score2, jornada=None, phase=None, events=None):
    """
    Registra el resultado de un partido de manera equivalente a admin.js:
    - Actualiza el fixture correspondiente (played: true, score1, score2, events)
    - Actualiza Copa Estelar / Champions Knockout si aplica
    - Acumula goles y asistencias en las fichas de los jugadores
    - Añade registro oficial a matchHistory
    - Guarda data.js
    """
    data = read_lmi_data()
    teams = data.get("teams", [])
    
    # Resolver equipos por id o nombre exacto/aproximado
    def resolve_team(ident):
        ident_clean = ident.strip().lower()
        # 1. Búsqueda por ID exacto
        for t in teams:
            if t["id"].lower() == ident_clean:
                return t
        # 2. Búsqueda por nombre
        for t in teams:
            if t["name"].lower() == ident_clean:
                return t
        # 3. Búsqueda por coincidencia parcial
        for t in teams:
            if ident_clean in t["name"].lower() or ident_clean in t["id"].lower():
                return t
        return None

    t1 = resolve_team(team1_identifier)
    t2 = resolve_team(team2_identifier)

    if not t1 or not t2:
        return {
            "success": False,
            "error": f"No se pudo identificar uno de los clubes (Local: '{team1_identifier}' -> {t1['name'] if t1 else 'No hallado'}, Visitante: '{team2_identifier}' -> {t2['name'] if t2 else 'No hallado'})"
        }

    if t1["id"] == t2["id"]:
        return {"success": False, "error": "El club local y visitante no pueden ser el mismo."}

    score1 = int(score1)
    score2 = int(score2)
    comp_clean = competition.strip().lower()
    
    # 1. Actualizar jugadores (goles / asistencias)
    players_map = {p["id"]: p for p in data.get("players", [])}
    serialized_events = []
    
    if events and isinstance(events, list):
        for ev in events:
            p_ident = ev.get("player") or ev.get("playerName") or ev.get("playerId")
            ev_team_ident = ev.get("team") or ev.get("teamId")
            goals = int(ev.get("goals") or 0)
            assists = int(ev.get("assists") or 0)

            # Buscar jugador
            target_p = None
            if p_ident in players_map:
                target_p = players_map[p_ident]
            else:
                p_ident_clean = str(p_ident).strip().lower()
                for p in data.get("players", []):
                    if p["name"].lower() == p_ident_clean:
                        target_p = p
                        break
            
            if target_p:
                match_team_id = ev_team_ident or target_p.get("teamId")
                if "statsByTeam" not in target_p or not isinstance(target_p["statsByTeam"], dict):
                    target_p["statsByTeam"] = {}
                if match_team_id and match_team_id not in target_p["statsByTeam"]:
                    target_p["statsByTeam"][match_team_id] = {
                        "teamId": match_team_id,
                        "teamName": match_team_id,
                        "goals": 0, "assists": 0,
                        "goals_liga": 0, "assists_liga": 0,
                        "goals_champions": 0, "assists_champions": 0,
                        "goals_estelar": 0, "assists_estelar": 0
                    }
                t_entry = target_p["statsByTeam"].get(match_team_id) if match_team_id else None

                if goals > 0:
                    target_p["goals"] = (target_p.get("goals") or 0) + goals
                    if t_entry:
                        t_entry["goals"] = (t_entry.get("goals") or 0) + goals
                    if comp_clean in ["oro", "plata", "liga"]:
                        target_p["goals_liga"] = (target_p.get("goals_liga") or 0) + goals
                        if t_entry:
                            t_entry["goals_liga"] = (t_entry.get("goals_liga") or 0) + goals
                    elif "champions" in comp_clean:
                        target_p["goals_champions"] = (target_p.get("goals_champions") or 0) + goals
                        if t_entry:
                            t_entry["goals_champions"] = (t_entry.get("goals_champions") or 0) + goals
                    elif "estelar" in comp_clean:
                        target_p["goals_estelar"] = (target_p.get("goals_estelar") or 0) + goals
                        if t_entry:
                            t_entry["goals_estelar"] = (t_entry.get("goals_estelar") or 0) + goals
                    
                    serialized_events.append({
                        "playerId": target_p["id"],
                        "playerName": target_p["name"],
                        "teamId": match_team_id,
                        "type": "gol",
                        "count": goals
                    })

                if assists > 0:
                    target_p["assists"] = (target_p.get("assists") or 0) + assists
                    if t_entry:
                        t_entry["assists"] = (t_entry.get("assists") or 0) + assists
                    if comp_clean in ["oro", "plata", "liga"]:
                        target_p["assists_liga"] = (target_p.get("assists_liga") or 0) + assists
                        if t_entry:
                            t_entry["assists_liga"] = (t_entry.get("assists_liga") or 0) + assists
                    elif "champions" in comp_clean:
                        target_p["assists_champions"] = (target_p.get("assists_champions") or 0) + assists
                        if t_entry:
                            t_entry["assists_champions"] = (t_entry.get("assists_champions") or 0) + assists
                    elif "estelar" in comp_clean:
                        target_p["assists_estelar"] = (target_p.get("assists_estelar") or 0) + assists
                        if t_entry:
                            t_entry["assists_estelar"] = (t_entry.get("assists_estelar") or 0) + assists

                    serialized_events.append({
                        "playerId": target_p["id"],
                        "playerName": target_p["name"],
                        "teamId": match_team_id,
                        "type": "asistencia",
                        "count": assists
                    })

    # 2. Actualizar Fixtures regulares (División Oro / Plata / Champions) o Cuadros Eliminatorios
    fixture_match_id = None
    if comp_clean in ["oro", "plata", "champions"]:
        fixtures = data.get("fixtures", {}).get(comp_clean, [])
        for round_item in fixtures:
            if jornada is not None and round_item.get("jornada") != int(jornada):
                continue
            for match in round_item.get("matches", []):
                m_t1 = match.get("team1Id")
                m_t2 = match.get("team2Id")
                if (m_t1 == t1["id"] and m_t2 == t2["id"]) or (m_t1 == t2["id"] and m_t2 == t1["id"]):
                    match["played"] = True
                    match["score1"] = score1
                    match["score2"] = score2
                    match["events"] = serialized_events
                    fixture_match_id = match.get("id")
                    break
            if fixture_match_id:
                break
    elif comp_clean in ["champions_ko", "estelar"]:
        ko_matches = data.get("championsLeagueMatches" if comp_clean == "champions_ko" else "copaEstelarMatches", [])
        for km in ko_matches:
            if phase and km.get("fase", "").lower() == phase.lower():
                km["team1"] = t1["name"]
                km["team2"] = t2["name"]
                km["score1"] = str(score1)
                km["score2"] = str(score2)
                km["estado"] = "Finalizado"
                km["events"] = serialized_events
                break

    # 3. Guardar en matchHistory
    match_record = {
        "id": f"match_{int(datetime.now().timestamp() * 1000)}",
        "timestamp": int(datetime.now().timestamp() * 1000),
        "date": datetime.now().strftime("%d %b %Y, %H:%M"),
        "competition": comp_clean,
        "jornada": int(jornada) if jornada else None,
        "fixtureMatchId": fixture_match_id,
        "phase": phase or (f"Jornada {jornada}" if jornada else ""),
        "team1Id": t1["id"],
        "team1Name": t1["name"],
        "team1Logo": t1.get("logo", ""),
        "score1": score1,
        "team2Id": t2["id"],
        "team2Name": t2["name"],
        "team2Logo": t2.get("logo", ""),
        "score2": score2,
        "events": serialized_events
    }

    if "matchHistory" not in data:
        data["matchHistory"] = []
    data["matchHistory"].insert(0, match_record)

    # 4. Guardar archivo
    write_lmi_data(data)

    return {
        "success": True,
        "matchId": match_record["id"],
        "summary": f"⚽ Partido registrado: {t1['name']} {score1} - {score2} {t2['name']} ({comp_clean.upper()})",
        "eventsCount": len(serialized_events)
    }

# =========================================================================
# 4. PUBLICACIÓN AUTOMÁTICA EN GITHUB PAGES
# =========================================================================
def deploy_to_github(commit_message="Actualizacion automatica por LMI Sentinel"):
    """Ejecuta git add, git commit y git push origin main"""
    try:
        subprocess.run(["git", "add", "."], cwd=BASE_DIR, check=True, capture_output=True, text=True)
        res_commit = subprocess.run(["git", "commit", "-m", commit_message], cwd=BASE_DIR, capture_output=True, text=True)
        res_push = subprocess.run(["git", "push", "origin", "main"], cwd=BASE_DIR, check=True, capture_output=True, text=True)
        return {"success": True, "output": res_push.stdout or "Push realizado con éxito."}
    except subprocess.CalledProcessError as e:
        return {"success": False, "error": e.stderr or str(e)}

if __name__ == "__main__":
    print("🔬 Ejecutando auditoría de prueba...")
    audit = audit_league_integrity()
    print(f"✅ Equipos: {audit['totalTeams']}, Jugadores: {audit['totalPlayers']}")
    print(f"⚠️ Jugadores duplicados: {len(audit['duplicates'])}")
    for d in audit["duplicates"]:
        print(f"   • {d['playerName']} ({d['count']} veces): {[x['teamName'] for x in d['occurrences']]}")
