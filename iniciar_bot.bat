@echo off
title LMI Telegram Sentinel Agent
cd /d "%~dp0"
echo ========================================================
echo        LMI TELEGRAM SENTINEL AGENT (DeepSeek AI)
echo ========================================================
echo.

if not exist .env (
    echo [!] No se encontro el archivo .env. Creando uno desde .env.example...
    copy .env.example .env >nul
    echo [i] Por favor edita el archivo .env colocando tu TELEGRAM_BOT_TOKEN
    echo     y tu DEEPSEEK_API_KEY.
    notepad .env
    pause
)

python telegram_bot.py
pause
