@echo off
chcp 65001 > nul
echo ----------------------------------------------------
echo 🚀 Actualizando Base de Datos LMI y Web en GitHub...
echo ----------------------------------------------------
echo.

:: 1. Procesar Excel con Python
echo [1/3] Procesando el archivo Excel...
python process_lmi_excel.py
if %errorlevel% neq 0 (
    echo ❌ Error al procesar el Excel. Abortando.
    pause
    exit /b %errorlevel%
)

echo.
:: 2. Añadir y hacer commit a los archivos modificados
echo [2/3] Creando commit en Git...
git add data.js "lmi temp 10.xlsx" "Logos Equipos" "Imagenes"
git commit -m "Actualización automática de base de datos"

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
