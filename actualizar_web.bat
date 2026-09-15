@echo off
chcp 65001 > nul
echo ----------------------------------------------------
echo 🚀 Actualizando Base de Datos LMI y Web en GitHub...
echo ----------------------------------------------------
echo.

:: 1. Procesar Excel con Python y Auditoría
echo [1/3] Auditando y procesando el archivo Excel...
python process_lmi_excel.py
if %errorlevel% equ 2 (
    echo.
    echo ⏸️ Actualización cancelada por el usuario. No se realizaron cambios en producción.
    pause
    exit /b 0
)
if %errorlevel% neq 0 (
    echo.
    echo ❌ Se detectaron problemas críticos en el Excel. Despliegue abortado para proteger la web.
    pause
    exit /b %errorlevel%
)

echo.
:: 2. Añadir y hacer commit a los archivos modificados
git add data.js app.js index.html style.css process_lmi_excel.py *.xlsx "Logos Equipos" "Imagenes" gestor_clubes.py gestor_clubes.bat
git commit -m "Actualización automática de base de datos y web"

echo.
:: 3. Enviar a GitHub Pages
echo [3/3] Subiendo cambios a GitHub...
git push origin main
if %errorlevel% neq 0 (
    echo.
    echo ⚠️ No se pudo subir a GitHub. Asegúrate de tener configurado el origen remoto.
    echo Ejecuta: git remote add origin https://github.com/TU_USUARIO/TU_REPOSITORIO.git
    echo.
) else (
    echo.
    echo ✅ ¡Listo! Los cambios están en camino. GitHub Pages se actualizará en 1-2 minutos.
)

echo.
pause
