# -*- coding: utf-8 -*-
"""
LMI Telegram Sentinel - Bot Agente con DeepSeek
Permite auditar la liga, detectar duplicados, registrar partidos y desplegar a GitHub desde el celular.
"""

import os
import sys
import json
import time
import urllib.request
import urllib.parse
from datetime import datetime

try:
    if hasattr(sys.stdout, 'reconfigure'):
        sys.stdout.reconfigure(encoding='utf-8', errors='replace')
    if hasattr(sys.stderr, 'reconfigure'):
        sys.stderr.reconfigure(encoding='utf-8', errors='replace')
except Exception:
    pass

import lmi_core

BASE_DIR = os.path.dirname(os.path.abspath(__file__))

def load_config():
    """Carga configuración desde .env o variables de entorno"""
    config = {
        "TELEGRAM_BOT_TOKEN": os.environ.get("TELEGRAM_BOT_TOKEN", ""),
        "DEEPSEEK_API_KEY": os.environ.get("DEEPSEEK_API_KEY", ""),
        "TELEGRAM_ALLOWED_USER_ID": os.environ.get("TELEGRAM_ALLOWED_USER_ID", ""),
        "DEEPSEEK_MODEL": os.environ.get("DEEPSEEK_MODEL", "deepseek-chat")
    }

    env_path = os.path.join(BASE_DIR, ".env")
    if os.path.exists(env_path):
        with open(env_path, "r", encoding="utf-8") as f:
            for line in f:
                line = line.strip()
                if not line or line.startswith("#"):
                    continue
                if "=" in line:
                    k, v = line.split("=", 1)
                    k = k.strip()
                    v = v.strip().strip('"').strip("'")
                    config[k] = v
    return config

CONFIG = load_config()

# =========================================================================
# TELEGRAM API CLIENT (SIN LIBRERÍAS EXTERNAS, 100% NATIVO)
# =========================================================================
def send_telegram_message(chat_id, text, parse_mode="Markdown"):
    token = CONFIG.get("TELEGRAM_BOT_TOKEN")
    if not token or token == "TU_TELEGRAM_BOT_TOKEN_AQUI":
        print(f"❌ Telegram Bot Token no configurado. Mensaje no enviado:\n{text}")
        return False

    url = f"https://api.telegram.org/bot{token}/sendMessage"
    payload = {
        "chat_id": chat_id,
        "text": text
    }
    if parse_mode:
        payload["parse_mode"] = parse_mode

    data = json.dumps(payload).encode("utf-8")
    req = urllib.request.Request(url, data=data, headers={"Content-Type": "application/json"})
    try:
        with urllib.request.urlopen(req, timeout=15) as resp:
            return json.loads(resp.read().decode("utf-8"))
    except Exception as e:
        # Reintentar sin parse_mode si falla por formateo Markdown
        if parse_mode:
            payload.pop("parse_mode", None)
            data = json.dumps(payload).encode("utf-8")
            req = urllib.request.Request(url, data=data, headers={"Content-Type": "application/json"})
            try:
                with urllib.request.urlopen(req, timeout=15) as resp:
                    return json.loads(resp.read().decode("utf-8"))
            except Exception:
                pass
        print(f"Error al enviar mensaje a Telegram: {e}")
        return False

def get_telegram_updates(offset=None, timeout=30):
    token = CONFIG.get("TELEGRAM_BOT_TOKEN")
    if not token or token == "TU_TELEGRAM_BOT_TOKEN_AQUI":
        return []

    url = f"https://api.telegram.org/bot{token}/getUpdates?timeout={timeout}"
    if offset:
        url += f"&offset={offset}"

    req = urllib.request.Request(url)
    try:
        with urllib.request.urlopen(req, timeout=timeout + 10) as resp:
            data = json.loads(resp.read().decode("utf-8"))
            if data.get("ok"):
                return data.get("result", [])
    except Exception as e:
        print(f"Error en long-polling de Telegram: {e}")
    return []

# =========================================================================
# DEEPSEEK AI INTEGRATION
# =========================================================================
SYSTEM_PROMPT = """Eres LMI Sentinel, el asistente y auditor inteligente de la Liga Master Internacional (LMI) de eFootball.
Tu trabajo es ayudar al administrador de la liga cuando esté fuera de casa mediante Telegram.

Tienes a tu disposición las siguientes funciones operativas:
1. find_duplicate_players: Busca si hay futbolistas repetidos en más de un club.
2. audit_league: Audita plantillas, posiciones no autorizadas, jugadores repetidos y estado general.
3. register_match: Registra un resultado de partido (competicion, local, visitante, goles local, goles visitante, jornada, eventos de goles/asistencias).
4. deploy_web: Publica los cambios en GitHub Pages (git push).

Instrucciones:
- Responde siempre en español, de forma clara, ejecutiva y estructurada con emojis futboleros.
- Si el usuario te pide registrar un partido, identifica:
  * Competición: 'oro', 'plata', 'champions' o 'estelar'
  * Club Local y Visitante
  * Goles de cada equipo
  * Goleadores o asistidores si los menciona
- Si el usuario te hace una pregunta general sobre la liga, responde amablemente y ofrece ayuda.
"""

DEEPSEEK_TOOLS = [
    {
        "type": "function",
        "function": {
            "name": "find_duplicate_players",
            "description": "Busca jugadores que se encuentren registrados en más de un equipo en la base de datos de la liga.",
            "parameters": {
                "type": "object",
                "properties": {},
                "required": []
            }
        }
    },
    {
        "type": "function",
        "function": {
            "name": "audit_league",
            "description": "Realiza una auditoría completa de la liga: detecta jugadores duplicados, anomalías de 23 jugadores por club, posiciones no autorizadas e imágenes faltantes.",
            "parameters": {
                "type": "object",
                "properties": {},
                "required": []
            }
        }
    },
    {
        "type": "function",
        "function": {
            "name": "register_match",
            "description": "Registra el resultado oficial de un partido en la base de datos, actualizando fixtures, tabla y estadísticas de futbolistas.",
            "parameters": {
                "type": "object",
                "properties": {
                    "competition": {
                        "type": "string",
                        "description": "Competición: 'oro', 'plata', 'champions', o 'estelar'",
                        "enum": ["oro", "plata", "champions", "estelar"]
                    },
                    "team1": {
                        "type": "string",
                        "description": "Nombre o ID del club local"
                    },
                    "team2": {
                        "type": "string",
                        "description": "Nombre o ID del club visitante"
                    },
                    "score1": {
                        "type": "integer",
                        "description": "Goles anotados por el equipo local"
                    },
                    "score2": {
                        "type": "integer",
                        "description": "Goles anotados por el equipo visitante"
                    },
                    "jornada": {
                        "type": "integer",
                        "description": "Número de jornada (opcional, ej: 1, 2, 3...)"
                    },
                    "events": {
                        "type": "array",
                        "description": "Goleadores y asistidores del partido si se especifican",
                        "items": {
                            "type": "object",
                            "properties": {
                                "player": {"type": "string", "description": "Nombre del futbolista"},
                                "goals": {"type": "integer", "description": "Goles anotados por el jugador"},
                                "assists": {"type": "integer", "description": "Asistencias del jugador"}
                            }
                        }
                    }
                },
                "required": ["competition", "team1", "team2", "score1", "score2"]
            }
        }
    },
    {
        "type": "function",
        "function": {
            "name": "deploy_web",
            "description": "Publica y despliega los cambios en producción a través de GitHub Pages (git add, commit y push).",
            "parameters": {
                "type": "object",
                "properties": {
                    "commit_message": {
                        "type": "string",
                        "description": "Mensaje descriptivo del commit"
                    }
                }
            }
        }
    }
]

def query_deepseek_with_tools(user_message, history=None):
    """Consulta a DeepSeek API con Function Calling habilitado"""
    api_key = CONFIG.get("DEEPSEEK_API_KEY")
    if not api_key or api_key == "TU_DEEPSEEK_API_KEY_AQUI":
        return {
            "text": "⚠️ *Clave de DeepSeek no configurada.* Por favor coloca tu `DEEPSEEK_API_KEY` en el archivo `.env` para habilitar el razonamiento de IA."
        }

    url = "https://api.deepseek.com/chat/completions"
    messages = [{"role": "system", "content": SYSTEM_PROMPT}]
    if history:
        messages.extend(history)
    messages.append({"role": "user", "content": user_message})

    payload = {
        "model": CONFIG.get("DEEPSEEK_MODEL", "deepseek-chat"),
        "messages": messages,
        "tools": DEEPSEEK_TOOLS,
        "tool_choice": "auto",
        "temperature": 0.2
    }

    data = json.dumps(payload).encode("utf-8")
    req = urllib.request.Request(url, data=data, headers={
        "Content-Type": "application/json",
        "Authorization": f"Bearer {api_key}"
    })

    try:
        with urllib.request.urlopen(req, timeout=30) as resp:
            res_json = json.loads(resp.read().decode("utf-8"))
            choice = res_json["choices"][0]["message"]
            return choice
    except Exception as e:
        return {"text": f"❌ Error al conectar con DeepSeek API: {e}"}

# =========================================================================
# MANEJADOR DE ACCIONES DEL AGENTE
# =========================================================================
def execute_tool_call(tool_name, tool_args):
    """Ejecuta la función del motor LMI y genera el mensaje de respuesta"""
    if tool_name == "find_duplicate_players":
        dups = lmi_core.find_duplicate_players()
        if not dups:
            return "✅ *Auditoría de Duplicados:* ¡Excelente! No existen futbolistas repetidos en la liga."
        
        msg = f"⚠️ *ALERTA: Se encontraron {len(dups)} jugadores duplicados en la liga:*\n\n"
        for d in dups:
            clubs = ", ".join([f"*{x['teamName']}* ({x['position']})" for x in d["occurrences"]])
            msg += f"• 👤 *{d['playerName']}* (Repetido en {d['count']} clubes):\n  └ {clubs}\n\n"
        msg += "_Sugerencia: Puedes transferir o dar de baja al jugador desde el Admin Hub para regularizar las plantillas._"
        return msg

    elif tool_name == "audit_league":
        report = lmi_core.audit_league_integrity()
        msg = f"🛡️ *INFORME DE AUDITORÍA GENERAL - LMI*\n"
        msg += f"📅 *Fecha:* {report['timestamp']}\n"
        msg += f"━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n"
        msg += f"📊 *Resumen General:*\n"
        msg += f"• Clubes Oficiales: *{report['totalTeams']}*\n"
        msg += f"• Futbolistas Registrados: *{report['totalPlayers']}*\n"
        msg += f"• Jugadores Duplicados: *{len(report['duplicates'])}*\n\n"

        if report["duplicates"]:
            msg += f"⚠️ *Jugadores Duplicados ({len(report['duplicates'])}):*\n"
            for d in report["duplicates"][:5]:
                c_str = ", ".join([x['teamName'] for x in d['occurrences']])
                msg += f"  - *{d['playerName']}* en: {c_str}\n"
            if len(report["duplicates"]) > 5:
                msg += f"  - _...y {len(report['duplicates']) - 5} más._\n"
            msg += "\n"

        if report["rosterAnomalies"]:
            msg += f"📋 *Clubes sin 23 jugadores exactos ({len(report['rosterAnomalies'])}):*\n"
            for a in report["rosterAnomalies"][:6]:
                sign = "+" if a["difference"] > 0 else ""
                msg += f"  - *{a['teamName']}:* {a['playerCount']} jugadores ({sign}{a['difference']})\n"
            msg += "\n"
        else:
            msg += "✅ Todas las plantillas cuentan con 23 jugadores exactos.\n\n"

        if report["invalidPositions"]:
            msg += f"🚩 *Posiciones No Oficiales ({len(report['invalidPositions'])}):*\n"
            for p in report["invalidPositions"][:4]:
                msg += f"  - {p['name']}: '{p['position']}'\n"
            msg += "\n"
        else:
            msg += "✅ Todas las posiciones pertenecen a las 13 oficiales de la liga.\n\n"

        if report["missingImages"]:
            msg += f"🖼️ *Imágenes / Logos faltantes:* {len(report['missingImages'])}\n"

        msg += "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n_Auditoría ejecutada con éxito por LMI Sentinel._"
        return msg

    elif tool_name == "register_match":
        comp = tool_args.get("competition", "oro")
        t1 = tool_args.get("team1")
        t2 = tool_args.get("team2")
        s1 = tool_args.get("score1", 0)
        s2 = tool_args.get("score2", 0)
        jornada = tool_args.get("jornada")
        events = tool_args.get("events")

        res = lmi_core.register_match_result(
            competition=comp,
            team1_identifier=t1,
            team2_identifier=t2,
            score1=s1,
            score2=s2,
            jornada=jornada,
            events=events
        )

        if not res["success"]:
            return f"❌ *No se pudo registrar el partido:*\n{res.get('error')}"

        msg = f"🎉 *¡PARTIDO REGISTRADO EXITOSAMENTE!*\n\n"
        msg += f"🏆 *Torneo:* {comp.upper()}\n"
        msg += f"⚽ *Resultado:* {res['summary']}\n"
        if jornada:
            msg += f"📍 *Jornada:* {jornada}\n"
        if res.get("eventsCount"):
            msg += f"📈 *Estadísticas:* Se sumaron goles/asistencias a {res['eventsCount']} futbolistas.\n"
        msg += f"\n_¿Deseas que suba estos cambios a producción en GitHub? Responde 'Desplegar web' para publicar._"
        return msg

    elif tool_name == "deploy_web":
        commit_msg = tool_args.get("commit_message") or "Actualización remota por LMI Telegram Bot"
        res = lmi_core.deploy_to_github(commit_msg)
        if res["success"]:
            return f"🚀 *¡Cambios publicados en producción!*\n\n• *Commit:* `{commit_msg}`\n• *Estado:* Subido a GitHub Pages correctamente.\nLa web pública se actualizará en 1-2 minutos."
        else:
            return f"❌ *Error al desplegar en GitHub:*\n```\n{res.get('error')}\n```"

    return "Acción no reconocida."

# =========================================================================
# PROCESAMIENTO DE MENSAJES DE USUARIO
# =========================================================================
def handle_user_command(user_text, chat_id, from_user_id):
    """Procesa comandos directos (/start, /duplicados, /auditar, /partido) o lenguaje natural con DeepSeek"""
    allowed_id = CONFIG.get("TELEGRAM_ALLOWED_USER_ID", "").strip()
    if not allowed_id:
        # Autorizar automáticamente al primer usuario administrador que le escribe al bot
        CONFIG["TELEGRAM_ALLOWED_USER_ID"] = str(from_user_id)
        print(f"🔑 Administrador enlazado automáticamente con Telegram ID: {from_user_id}")
        try:
            env_path = os.path.join(BASE_DIR, ".env")
            if os.path.exists(env_path):
                with open(env_path, "r", encoding="utf-8") as f:
                    env_text = f.read()
                env_text = env_text.replace('TELEGRAM_ALLOWED_USER_ID=""', f'TELEGRAM_ALLOWED_USER_ID="{from_user_id}"')
                with open(env_path, "w", encoding="utf-8") as f:
                    f.write(env_text)
        except Exception as e:
            print(f"No se pudo guardar allowed_id en .env: {e}")
    elif str(from_user_id) != allowed_id:
        return f"🚫 *Acceso no autorizado.* Tu Telegram User ID es `{from_user_id}`.\nEste bot está reservado exclusivamente para la administración de la LMI."

    text_clean = user_text.strip()
    cmd = text_clean.lower()

    # Comandos rápidos nativos (no requieren tokens de DeepSeek)
    if cmd in ["/start", "/ayuda", "ayuda", "start"]:
        return (
            "👋 *¡Hola! Soy LMI Sentinel, tu Agente Auditor de la Liga Master Internacional.*\n\n"
            "Puedo monitorear y realizar tareas en la liga mientras estás fuera de casa:\n\n"
            "🔍 *Auditorías y Control:*\n"
            "• `/duplicados` - Verifica si existen jugadores duplicados en la base de datos.\n"
            "• `/auditar` - Reporte integral (plantillas de 23, posiciones, logos).\n\n"
            "⚽ *Gestión de Partidos:*\n"
            "• Puedes escribir en lenguaje natural, ej:\n"
            "  _«Registra un partido de División Oro: Como 2 - 1 Arsenal, gol de Vardy y asistencia de Nico Paz»_\n\n"
            "🚀 *Producción:*\n"
            "• `/desplegar` - Sube todos los cambios a GitHub Pages (git push).\n\n"
            f"👤 _Tu Telegram User ID:_ `{from_user_id}`"
        )

    if cmd in ["/duplicados", "duplicados", "verificar duplicados"]:
        return execute_tool_call("find_duplicate_players", {})

    if cmd in ["/auditar", "auditar", "auditoria", "reporte"]:
        return execute_tool_call("audit_league", {})

    if cmd in ["/desplegar", "desplegar", "deploy", "subir cambios"]:
        return execute_tool_call("deploy_web", {"commit_message": "Actualización remota desde Telegram"})

    # Lenguaje natural con DeepSeek AI
    ai_resp = query_deepseek_with_tools(user_text)

    # Si DeepSeek pide ejecutar una función (Tool Call)
    tool_calls = ai_resp.get("tool_calls")
    if tool_calls and isinstance(tool_calls, list) and len(tool_calls) > 0:
        tc = tool_calls[0]
        fn_name = tc.get("function", {}).get("name")
        raw_args = tc.get("function", {}).get("arguments", "{}")
        try:
            fn_args = json.loads(raw_args)
        except Exception:
            fn_args = {}
        
        # Ejecutar función y retornar resultado
        return execute_tool_call(fn_name, fn_args)

    # Respuesta de texto de DeepSeek
    content = ai_resp.get("content") or ai_resp.get("text")
    if content:
        return content

    return "No entendí la solicitud. Puedes escribir `/ayuda` para ver los comandos disponibles."

# =========================================================================
# BUCLE PRINCIPAL (POLLING)
# =========================================================================
def run_telegram_bot():
    print("🤖 Iniciando LMI Telegram Sentinel Agent...")
    print(f"📁 Directorio base: {BASE_DIR}")
    
    token = CONFIG.get("TELEGRAM_BOT_TOKEN")
    if not token or token == "TU_TELEGRAM_BOT_TOKEN_AQUI":
        print("\n⚠️ AVISO IMPORTANTE:")
        print("El Bot de Telegram necesita tu TELEGRAM_BOT_TOKEN.")
        print("Edita el archivo .env o colócalo en las variables de entorno para que el bot empiece a escuchar.")
        print("Ejecuta 'python telegram_bot.py --test' para probar el motor de auditoría sin Telegram.\n")

    offset = None
    while True:
        try:
            updates = get_telegram_updates(offset=offset, timeout=25)
            for upd in updates:
                offset = upd["update_id"] + 1
                msg = upd.get("message")
                if not msg or "text" not in msg:
                    continue

                user_text = msg["text"]
                chat_id = msg["chat"]["id"]
                from_user_id = msg.get("from", {}).get("id", chat_id)
                user_name = msg.get("from", {}).get("first_name", "Admin")

                print(f"📩 [{datetime.now().strftime('%H:%M:%S')}] Mensaje de {user_name} ({from_user_id}): {user_text}")

                # Enviar acción "escribiendo..."
                reply = handle_user_command(user_text, chat_id, from_user_id)
                send_telegram_message(chat_id, reply)

        except KeyboardInterrupt:
            print("\n🛑 Bot detenido por el usuario.")
            break
        except Exception as e:
            print(f"Error en loop de Telegram: {e}")
            time.sleep(3)

if __name__ == "__main__":
    if "--test" in sys.argv:
        print("🧪 MODO PRUEBA DE COMANDOS LOCALES:")
        print("\n1. Test de Duplicados:")
        print(execute_tool_call("find_duplicate_players", {}))
        print("\n2. Test de Auditoría General:")
        print(execute_tool_call("audit_league", {}))
    else:
        run_telegram_bot()
