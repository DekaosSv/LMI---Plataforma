@echo off
title LMI Admin Hub - Panel Centralizado
cls
echo ===================================================================
echo   LMI ADMIN HUB - LIGA MASTER INTERNACIONAL
echo ===================================================================
echo.
echo   Iniciando el servidor de administracion local...
echo   Se abrira automaticamente en tu navegador web.
echo.
echo   [Para cerrar el sistema en cualquier momento, cierra esta ventana]
echo ===================================================================
echo.

where python >nul 2>nul
if %errorlevel% equ 0 (
    python admin_server.py
    goto :fin
)

where py >nul 2>nul
if %errorlevel% equ 0 (
    py admin_server.py
    goto :fin
)

echo.
echo [ERROR] No se encontro Python en tu sistema.
echo Asegurate de tener Python instalado y accesible en tu terminal.
echo.
pause

:fin
