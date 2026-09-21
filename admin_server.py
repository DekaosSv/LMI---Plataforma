#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
LMI Admin Hub - Servidor Backend Local
Permite gestionar la base de datos de la Liga Master Internacional,
modificar partidos, plantillas, mercado y trofeos, y desplegar en GitHub Pages.
"""

import http.server
import socketserver
import json
import os
import sys
import re
import urllib.parse
import subprocess
import webbrowser
import shutil

try:
    if hasattr(sys.stdout, 'reconfigure'):
        sys.stdout.reconfigure(encoding='utf-8', errors='replace')
    if hasattr(sys.stderr, 'reconfigure'):
        sys.stderr.reconfigure(encoding='utf-8', errors='replace')
except Exception:
    pass

PORT = 8000
BASE_DIR = os.path.dirname(os.path.abspath(__file__))

def read_data_js():
    data_path = os.path.join(BASE_DIR, "data.js")
    if not os.path.exists(data_path):
        return {}
    with open(data_path, "r", encoding="utf-8") as f:
        content = f.read()
    
    prefix = "var INITIAL_LMI_DATA = "
    idx = content.find(prefix)
    if idx == -1:
        return {}
    end_idx = content.rfind(";")
    if end_idx == -1:
        end_idx = len(content)
    json_str = content[idx + len(prefix):end_idx].strip()
    try:
        return json.loads(json_str)
    except Exception as e:
        print(f"Error al decodificar JSON de data.js: {e}")
        return {}

def write_data_js(data_obj):
    data_path = os.path.join(BASE_DIR, "data.js")
    backup_path = os.path.join(BASE_DIR, "data.backup.js")
    
    # Crear respaldo si existe el original
    if os.path.exists(data_path):
        try:
            shutil.copyfile(data_path, backup_path)
        except Exception as e:
            print(f"No se pudo crear copia de seguridad: {e}")
            
    header = "// Base de datos unificada LMI Temporada 10\n\nvar INITIAL_LMI_DATA = "
    json_str = json.dumps(data_obj, ensure_ascii=False, indent=2)
    footer = ";\n"
    
    with open(data_path, "w", encoding="utf-8") as f:
        f.write(header + json_str + footer)
    print("✅ 'data.js' actualizado correctamente.")
    
    # Sincronizar Registro Balon de Oro.txt si hay entradas
    sync_balon_oro_txt(data_obj.get("balonOro", []))

def sync_balon_oro_txt(balon_oro_list):
    if not balon_oro_list:
        return
    txt_path = os.path.join(BASE_DIR, "Balon de oro", "Registro Balon de Oro.txt")
    os.makedirs(os.path.dirname(txt_path), exist_ok=True)
    
    lines = []
    for b in balon_oro_list:
        season = b.get('season') or b.get('temporada') or 'Temporada 10'
        player = b.get('player') or b.get('jugador') or ''
        team = b.get('team') or b.get('club') or ''
        manager = b.get('manager') or b.get('dt') or ''
        img = b.get('image') or b.get('imagen') or ''
        goals = b.get('goals') if b.get('goals') is not None else b.get('goles', 0)
        assists = b.get('assists') if b.get('assists') is not None else b.get('asistencias', 0)
        trophies = b.get('trophies') or b.get('titulos') or ''
        desc = b.get('description') or b.get('descripcion') or ''

        lines.append(f"Temporada: {season}")
        lines.append(f"Jugador: {player}")
        lines.append(f"Club: {team}")
        if manager:
            lines.append(f"DT: {manager}")
        if img:
            lines.append(f"Imagen: {os.path.basename(img)}")
        lines.append(f"Goles: {goals}")
        lines.append(f"Asistencias: {assists}")
        if trophies:
            lines.append(f"Titulos: {trophies}")
        if desc:
            lines.append(f"Descripcion: {desc}")
        lines.append("") # Separador
        
    try:
        with open(txt_path, "w", encoding="utf-8") as f:
            f.write("\n".join(lines).strip() + "\n")
        print("✅ 'Balon de oro/Registro Balon de Oro.txt' sincronizado.")
    except Exception as e:
        print(f"Error al sincronizar Registro Balon de Oro.txt: {e}")

class AdminRequestHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=BASE_DIR, **kwargs)

    def end_headers(self):
        self.send_header("Cache-Control", "no-cache, no-store, must-revalidate")
        self.send_header("Pragma", "no-cache")
        self.send_header("Expires", "0")
        super().end_headers()

    def do_OPTIONS(self):
        self.send_response(200)
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type, Authorization")
        self.end_headers()

    def do_GET(self):
        parsed = urllib.parse.urlparse(self.path)
        path = parsed.path
        
        if path == "/":
            self.send_response(302)
            self.send_header("Location", "/admin.html")
            self.end_headers()
            return
            
        if path == "/api/data":
            data = read_data_js()
            self.send_response(200)
            self.send_header("Content-Type", "application/json; charset=utf-8")
            self.send_header("Access-Control-Allow-Origin", "*")
            self.end_headers()
            self.wfile.write(json.dumps(data, ensure_ascii=False).encode("utf-8"))
            return

        if path == "/api/status":
            self.send_response(200)
            self.send_header("Content-Type", "application/json")
            self.send_header("Access-Control-Allow-Origin", "*")
            self.end_headers()
            self.wfile.write(json.dumps({"status": "online", "port": PORT}).encode("utf-8"))
            return

        return super().do_GET()

    def do_POST(self):
        parsed = urllib.parse.urlparse(self.path)
        path = parsed.path
        
        content_length = int(self.headers.get('Content-Length', 0))
        body = self.rfile.read(content_length).decode('utf-8') if content_length > 0 else ""

        if path == "/api/save":
            try:
                payload = json.loads(body)
                write_data_js(payload)
                self.send_response(200)
                self.send_header("Content-Type", "application/json; charset=utf-8")
                self.send_header("Access-Control-Allow-Origin", "*")
                self.end_headers()
                self.wfile.write(json.dumps({"success": True, "message": "Datos guardados exitosamente"}).encode("utf-8"))
            except Exception as e:
                self.send_response(500)
                self.send_header("Content-Type", "application/json; charset=utf-8")
                self.send_header("Access-Control-Allow-Origin", "*")
                self.end_headers()
                self.wfile.write(json.dumps({"success": False, "error": str(e)}).encode("utf-8"))
            return

        if path == "/api/deploy":
            try:
                commit_msg = "Actualización desde LMI Admin Hub"
                if body:
                    try:
                        p = json.loads(body)
                        commit_msg = p.get("message") or p.get("commitMessage") or commit_msg
                    except:
                        pass
                
                # Ejecutar git add
                add_cmd = ["git", "add", "data.js", "app.js", "index.html", "style.css", "process_lmi_excel.py", "Sala de campeones", "Balon de oro", "Logos Equipos", "Imagenes", "actualizar_web.bat", "admin.html", "admin.js", "admin.css", "admin_server.py", "admin.bat"]
                p_add = subprocess.run(add_cmd, cwd=BASE_DIR, capture_output=True, text=True)
                
                # Ejecutar git commit
                commit_cmd = ["git", "commit", "-m", commit_msg]
                p_commit = subprocess.run(commit_cmd, cwd=BASE_DIR, capture_output=True, text=True)
                
                # Ejecutar git push
                push_cmd = ["git", "push", "origin", "main"]
                p_push = subprocess.run(push_cmd, cwd=BASE_DIR, capture_output=True, text=True)
                
                output = f"--- Git Add ---\n{p_add.stdout}{p_add.stderr}\n\n--- Git Commit ---\n{p_commit.stdout}{p_commit.stderr}\n\n--- Git Push ---\n{p_push.stdout}{p_push.stderr}"
                
                success = p_push.returncode == 0 or "Everything up-to-date" in output
                
                self.send_response(200)
                self.send_header("Content-Type", "application/json; charset=utf-8")
                self.send_header("Access-Control-Allow-Origin", "*")
                self.end_headers()
                self.wfile.write(json.dumps({
                    "success": success,
                    "output": output,
                    "message": "¡Despliegue a GitHub Pages realizado exitosamente!" if success else "Hubo una advertencia durante el despliegue."
                }).encode("utf-8"))
            except Exception as e:
                self.send_response(500)
                self.send_header("Content-Type", "application/json; charset=utf-8")
                self.send_header("Access-Control-Allow-Origin", "*")
                self.end_headers()
                self.wfile.write(json.dumps({"success": False, "error": str(e)}).encode("utf-8"))
            return

        self.send_response(404)
        self.end_headers()

def start_server():
    server_address = ("0.0.0.0", PORT)
    # Permite reusar el socket si se reinicia rápidamente
    socketserver.TCPServer.allow_reuse_address = True
    with socketserver.TCPServer(server_address, AdminRequestHandler) as httpd:
        url = f"http://127.0.0.1:{PORT}/admin.html"
        print("=" * 60, flush=True)
        print(" ⚽ LMI ADMIN HUB - Servidor Local Iniciado", flush=True)
        print(f" 🌐 Panel de Control disponible en: {url}", flush=True)
        print(" Presiona Ctrl + C en esta ventana para detener el servidor.", flush=True)
        print("=" * 60, flush=True)
        
        # Abrir el navegador automáticamente
        try:
            webbrowser.open(url)
        except Exception:
            pass
            
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\n🛑 Servidor detenido por el usuario.")
            httpd.shutdown()

if __name__ == "__main__":
    start_server()
