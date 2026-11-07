#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
LMI Security Sentinel - Pre-Commit Guard
Previene automáticamente que credenciales, tokens de Telegram, API keys o archivos .env
puedan ser commiteados al repositorio.
"""

import sys
import subprocess
import re

PATTERNS = [
    (r"\b[0-9]{8,11}:[a-zA-Z0-9_-]{35}\b", "Token de Bot de Telegram"),
    (r"\bsk-[a-zA-Z0-9_-]{32,}\b", "API Key (DeepSeek / OpenAI)"),
    (r"\bghp_[a-zA-Z0-9]{36,}\b", "GitHub Personal Access Token"),
    (r"\bgithub_pat_[a-zA-Z0-9_]{50,}\b", "GitHub Fine-Grained Token"),
    (r"\bAIza[0-9A-Za-z-_]{35}\b", "Google API Key")
]

FORBIDDEN_FILES = [".env", ".env.local", ".env.production", "agent_config.json"]

def main():
    # 1. Verificar archivos staged
    res = subprocess.run(["git", "diff", "--cached", "--name-only"], capture_output=True, text=True, check=False)
    staged_files = [f.strip() for f in res.stdout.splitlines() if f.strip()]

    if not staged_files:
        sys.exit(0)

    # 2. Bloquear si se intenta commitear un archivo confidencial
    for f in staged_files:
        f_lower = f.lower()
        for forbidden in FORBIDDEN_FILES:
            if f_lower == forbidden or f_lower.endswith("/" + forbidden) or f_lower.endswith("\\" + forbidden):
                print("\n" + "=" * 65)
                print("🚨 BLOQUEO DE SEGURIDAD LMI SENTINEL (Pre-Commit Guard)")
                print("=" * 65)
                print(f"❌ Intento de commitear archivo confidencial: {f}")
                print("💡 Este archivo contiene variables privadas y debe permanecer en .gitignore.")
                print("   Ejecuta: git reset HEAD " + f)
                print("=" * 65 + "\n")
                sys.exit(1)

    # 3. Analizar líneas añadidas (+) en el diff staged
    diff_res = subprocess.run(["git", "diff", "--cached", "-U0"], capture_output=True, text=True, check=False)
    diff_lines = diff_res.stdout.splitlines()

    current_file = ""
    violations = []

    for line in diff_lines:
        if line.startswith("+++ b/"):
            current_file = line[6:]
            continue

        # Solo analizar líneas añadidas (empiezan con + pero no +++)
        if line.startswith("+") and not line.startswith("+++"):
            added_content = line[1:]
            for pattern, desc in PATTERNS:
                if re.search(pattern, added_content):
                    # Evitar falsos positivos si es un placeholder o comentario de ejemplo
                    if "PEGA_AQUI" in added_content or "TU_TELEGRAM" in added_content or "TU_API_KEY" in added_content:
                        continue
                    violations.append((current_file, desc, added_content.strip()[:60]))

    if violations:
        print("\n" + "=" * 65)
        print("🚨 BLOQUEO DE SEGURIDAD LMI SENTINEL (Pre-Commit Guard)")
        print("=" * 65)
        print("❌ Se detectaron credenciales o tokens en los cambios a commitear:\n")
        for f, desc, snippet in violations:
            print(f"  • Archivo: {f}")
            print(f"    Tipo:    {desc}")
            print(f"    Texto:   {snippet}...")
            print()
        print("⛔ El commit fue CANCELADO para evitar exponer secretos en GitHub.")
        print("💡 Guarda tus tokens y claves en el archivo local .env (ignorado por git).")
        print("=" * 65 + "\n")
        sys.exit(1)

    sys.exit(0)

if __name__ == "__main__":
    main()
