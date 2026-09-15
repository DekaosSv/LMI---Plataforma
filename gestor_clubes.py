import openpyxl
import os
import sys
import subprocess
import re
import unicodedata

sys.stdout.reconfigure(encoding='utf-8')

EXCEL_FILE = 'LMI Base.xlsx'

def normalize_key(name):
    if not name: return ""
    nfkd_form = unicodedata.normalize('NFKD', str(name))
    only_ascii = "".join([c for c in nfkd_form if not unicodedata.combining(c)])
    clean = re.sub(r'\s*\([pPcC]\)\s*$', '', only_ascii)
    return re.sub(r'[^a-zA-Z0-9]', '', clean).lower()

def print_header(title):
    print("\n" + "=" * 65)
    print(f"  ⚽  {title}")
    print("=" * 65)

def get_clubes_list(wb):
    ws_lista = wb['Lista']
    clubes = []
    for col_idx in range(1, ws_lista.max_column + 1):
        name = str(ws_lista.cell(row=1, column=col_idx).value or '').strip()
        if name:
            col_letter = openpyxl.utils.get_column_letter(col_idx)
            # Count players in this column
            p_count = 0
            pt_count = 0
            for r in range(2, 26):
                val = str(ws_lista.cell(row=r, column=col_idx).value or '').strip()
                if val:
                    p_count += 1
                    if val.upper().startswith(('PT', 'POR', 'GK')):
                        pt_count += 1
            clubes.append({
                "index": col_idx,
                "col": col_letter,
                "name": name,
                "players": p_count,
                "goalkeepers": pt_count
            })
    return clubes

def listar_clubes(wb):
    print_header("CLUBES ACTIVOS EN LMI")
    clubes = get_clubes_list(wb)
    ws_clubes = wb['Clubes'] if 'Clubes' in wb.sheetnames else None
    
    clubes_info = {}
    if ws_clubes:
        for r in range(2, ws_clubes.max_row + 1):
            cname = str(ws_clubes.cell(row=r, column=1).value or '').strip()
            if cname:
                clubes_info[normalize_key(cname)] = {
                    "dt": ws_clubes.cell(row=r, column=4).value or 'N/A',
                    "estadio": ws_clubes.cell(row=r, column=3).value or 'N/A',
                    "rank": ws_clubes.cell(row=r, column=8).value or r - 1
                }

    print(f"Total de clubes registrados: {len(clubes)}\n")
    print(f"{'#':<3} {'Col':<4} {'Club':<25} {'Plantilla':<12} {'Porteros':<10} {'DT':<18}")
    print("-" * 75)
    for i, c in enumerate(clubes, 1):
        norm = normalize_key(c['name'])
        info = clubes_info.get(norm, {})
        dt = str(info.get('dt', 'N/A'))
        print(f"{i:<3} {c['col']:<4} {c['name']:<25} {c['players']}/23        {c['goalkeepers']}          {dt:<18}")
    print("-" * 75)

def eliminar_club(wb):
    print_header("ELIMINAR UN CLUB DE LA LIGA")
    clubes = get_clubes_list(wb)
    for i, c in enumerate(clubes, 1):
        print(f"  [{i:2d}] {c['name']} (Columna {c['col']})")
    print("  [ 0] Cancelar y volver")
    
    try:
        opc = input("\nSelecciona el número del club que deseas eliminar: ").strip()
        if not opc.isdigit() or int(opc) == 0:
            print("Operación cancelada.")
            return False
        idx = int(opc)
        if idx < 1 or idx > len(clubes):
            print("Opción inválida.")
            return False
    except (EOFError, KeyboardInterrupt):
        return False
        
    club_a_eliminar = clubes[idx - 1]
    cname = club_a_eliminar['name']
    
    print(f"\n⚠️  ATENCIÓN: Vas a eliminar por completo al club '{cname}'.")
    print("Esto borrará su columna de 23 jugadores en 'Lista' y 'BD', su ficha en 'Clubes'")
    print("y sus registros de partidos en las hojas de estadísticas.\n")
    
    conf = input(f"¿Estás seguro de que deseas eliminar a '{cname}'? (escribe 'SI' para confirmar): ").strip().upper()
    if conf != "SI":
        print("❌ Eliminación cancelada.")
        return False

    print(f"\nProcesando eliminación de '{cname}'...")
    
    # 1. Eliminar columna en Lista
    if 'Lista' in wb.sheetnames:
        ws = wb['Lista']
        col_to_del = None
        for c in range(1, ws.max_column + 1):
            if str(ws.cell(row=1, column=c).value or '').strip().lower() == cname.lower():
                col_to_del = c
                break
        if col_to_del:
            ws.delete_cols(col_to_del, 1)
            print("  ✅ Columna eliminada en 'Lista'")

    # 2. Eliminar columna en BD
    if 'BD' in wb.sheetnames:
        ws = wb['BD']
        col_to_del = None
        for c in range(1, ws.max_column + 1):
            val = str(ws.cell(row=1, column=c).value or '').strip().replace('_', ' ')
            if val.lower() == cname.lower():
                col_to_del = c
                break
        if col_to_del:
            ws.delete_cols(col_to_del, 1)
            print("  ✅ Columna eliminada en 'BD'")

    # 3. Eliminar fila en Clubes
    if 'Clubes' in wb.sheetnames:
        ws = wb['Clubes']
        for r in range(ws.max_row, 1, -1):
            if str(ws.cell(row=r, column=1).value or '').strip().lower() == cname.lower():
                ws.delete_rows(r, 1)
                print("  ✅ Registro eliminado en 'Clubes'")
                break

    # 4. Eliminar registros de partidos en Registro Liga
    if 'Registro Liga' in wb.sheetnames:
        ws = wb['Registro Liga']
        count = 0
        for r in range(ws.max_row, 1, -1):
            val = str(ws.cell(row=r, column=1).value or '').strip().replace('_', ' ')
            if val.lower() == cname.lower():
                ws.delete_rows(r, 1)
                count += 1
        if count:
            print(f"  ✅ {count} registros eliminados en 'Registro Liga'")

    # 5. Eliminar registros de partidos en Registro Champions
    if 'Registro Champions' in wb.sheetnames:
        ws = wb['Registro Champions']
        count = 0
        for r in range(ws.max_row, 1, -1):
            val = str(ws.cell(row=r, column=1).value or '').strip().replace('_', ' ')
            if val.lower() == cname.lower():
                ws.delete_rows(r, 1)
                count += 1
        if count:
            print(f"  ✅ {count} registros eliminados en 'Registro Champions'")

    # 6. Re-enumerar posiciones en Clubes
    if 'Clubes' in wb.sheetnames:
        ws = wb['Clubes']
        col_rank = None
        for c in range(1, ws.max_column + 1):
            h = str(ws.cell(row=1, column=c).value or '').strip().lower()
            if 'posicion' in h:
                col_rank = c
                break
        if col_rank:
            rank = 1
            for r in range(2, ws.max_row + 1):
                if ws.cell(row=r, column=1).value:
                    ws.cell(row=r, column=col_rank).value = str(rank)
                    rank += 1

    wb.save(EXCEL_FILE)
    print(f"\n🎉 ¡Club '{cname}' eliminado con éxito de '{EXCEL_FILE}'!")
    return True

def modificar_club(wb):
    print_header("MODIFICAR DATOS DE UN CLUB")
    if 'Clubes' not in wb.sheetnames:
        print("❌ No se encontró la hoja 'Clubes'.")
        return False
        
    ws_clubes = wb['Clubes']
    clubes_rows = []
    for r in range(2, ws_clubes.max_row + 1):
        cname = str(ws_clubes.cell(row=r, column=1).value or '').strip()
        if cname:
            clubes_rows.append({
                "row": r,
                "name": cname,
                "short": ws_clubes.cell(row=r, column=2).value or '',
                "estadio": ws_clubes.cell(row=r, column=3).value or '',
                "dt": ws_clubes.cell(row=r, column=4).value or '',
                "presupuesto": ws_clubes.cell(row=r, column=5).value or '100000000',
                "logo": ws_clubes.cell(row=r, column=7).value or ''
            })

    for i, c in enumerate(clubes_rows, 1):
        print(f"  [{i:2d}] {c['name']} (DT: {c['dt']} | Estadio: {c['estadio']})")
    print("  [ 0] Cancelar")

    try:
        opc = input("\nSelecciona el club a modificar: ").strip()
        if not opc.isdigit() or int(opc) == 0:
            return False
        idx = int(opc)
        if idx < 1 or idx > len(clubes_rows):
            return False
    except (EOFError, KeyboardInterrupt):
        return False

    c = clubes_rows[idx - 1]
    r = c['row']
    print(f"\n--- Modificando: {c['name']} ---")
    print("(Presiona ENTER para mantener el valor actual)\n")
    
    new_dt = input(f"Director Técnico [{c['dt']}]: ").strip()
    if new_dt: ws_clubes.cell(row=r, column=4).value = new_dt
    
    new_estadio = input(f"Estadio [{c['estadio']}]: ").strip()
    if new_estadio: ws_clubes.cell(row=r, column=3).value = new_estadio
    
    new_short = input(f"Abreviatura (3 letras) [{c['short']}]: ").strip().upper()
    if new_short: ws_clubes.cell(row=r, column=2).value = new_short
    
    new_pres = input(f"Presupuesto [{c['presupuesto']}]: ").strip()
    if new_pres and new_pres.isdigit(): ws_clubes.cell(row=r, column=5).value = new_pres
    
    new_logo = input(f"Ruta Logo [{c['logo']}]: ").strip()
    if new_logo: ws_clubes.cell(row=r, column=7).value = new_logo

    wb.save(EXCEL_FILE)
    print(f"\n✅ Datos de '{c['name']}' actualizados con éxito.")
    return True

def anadir_club(wb):
    print_header("AÑADIR UN NUEVO CLUB A LA LIGA")
    ws_lista = wb['Lista']
    ws_clubes = wb['Clubes']
    
    # 1. Solicitar datos básicos
    nombre = input("Nombre oficial del club (ej. Chelsea FC): ").strip()
    if not nombre:
        print("El nombre no puede estar vacío.")
        return False
        
    # Verificar que no exista ya
    for c in range(1, ws_lista.max_column + 1):
        if str(ws_lista.cell(row=1, column=c).value or '').strip().lower() == nombre.lower():
            print("❌ Ya existe un club con ese nombre en la liga.")
            return False

    short_name = input("Abreviatura de 3 letras (ej. CHE): ").strip().upper() or nombre[:3].upper()
    dt = input("Director Técnico (DT): ").strip() or "Director Técnico"
    estadio = input("Nombre del Estadio: ").strip() or f"Estadio {nombre}"
    presupuesto = input("Presupuesto Inicial [100000000]: ").strip() or "100000000"
    logo = input("Ruta del Logo (ej. Logos Equipos/chelsea.png): ").strip() or f"Logos Equipos/{normalize_key(nombre)}.png"

    print("\n" + "-" * 60)
    print("⚽ INGRESO DE PLANTILLA (23 JUGADORES)")
    print("Recuerda usar prefijos de posición táctica:")
    print("Ejemplos: PT Courtois, CT Saliba, LI Davies, MC Pedri, DC Haaland")
    print("-" * 60)
    print("  [1] Pegar lista completa de 23 jugadores (una por línea)")
    print("  [2] Ingresar jugadores uno por uno")
    modo = input("Selecciona método [1]: ").strip() or "1"
    
    jugadores = []
    if modo == "1":
        print("\nPega aquí tus 23 jugadores (termina presionando Enter dos veces o escribe FIN):")
        while len(jugadores) < 23:
            try:
                line = input().strip()
                if line.upper() == "FIN":
                    break
                if line:
                    jugadores.append(line)
            except EOFError:
                break
    else:
        for i in range(1, 24):
            while True:
                j = input(f"Jugador #{i:02d} (ej. PT Alisson): ").strip()
                if j:
                    jugadores.append(j)
                    break

    if len(jugadores) < 23:
        print(f"\n⚠️ Ingresaste {len(jugadores)} jugadores. Se requieren exactamente 23.")
        rellenar = input("¿Deseas rellenar automáticamente los faltantes como reservas? (S/N) [S]: ").strip().lower()
        if rellenar not in ['n', 'no']:
            for i in range(len(jugadores) + 1, 24):
                jugadores.append(f"MC Reserva {nombre} {i}")
        else:
            print("❌ Operación cancelada.")
            return False

    # Validar que tenga al menos un portero (PT)
    has_pt = any(j.upper().startswith(('PT', 'POR', 'GK')) for j in jugadores[:23])
    if not has_pt:
        print("⚠️ Advertencia: No se detectó ningún Portero con prefijo 'PT' en la lista.")
        corregir = input("¿Deseas convertir el jugador #1 a portero ('PT ')? (S/N) [S]: ").strip().lower()
        if corregir not in ['n', 'no']:
            jugadores[0] = "PT " + re.sub(r'^(PT|CT|LI|LD|MC|MCD|MP|ED|EI|DC)\s*', '', jugadores[0])

    # 2. Agregar a hoja Lista
    new_col_idx = ws_lista.max_column + 1
    # Check if last column has value
    while ws_lista.cell(row=1, column=new_col_idx - 1).value is None and new_col_idx > 1:
        new_col_idx -= 1
        
    ws_lista.cell(row=1, column=new_col_idx).value = nombre
    for r_offset, j_text in enumerate(jugadores[:23], start=2):
        ws_lista.cell(row=r_offset, column=new_col_idx).value = j_text
    print(f"\n  ✅ Plantilla agregada a 'Lista' en la columna {openpyxl.utils.get_column_letter(new_col_idx)}")

    # 3. Agregar a hoja BD
    if 'BD' in wb.sheetnames:
        ws_bd = wb['BD']
        ws_bd.cell(row=1, column=new_col_idx).value = nombre.replace(' ', '_')
        for r_offset, j_text in enumerate(jugadores[:23], start=2):
            clean_name = re.sub(r'^(PT|CT|LI|LD|MC|MCD|MP|ED|EI|DC|POR|GK|DFC|DF)\s*', '', j_text).strip()
            ws_bd.cell(row=r_offset, column=new_col_idx).value = clean_name
        print("  ✅ Plantilla agregada a 'BD'")

    # 4. Agregar a hoja Clubes
    new_row = ws_clubes.max_row + 1
    ws_clubes.cell(row=new_row, column=1).value = nombre
    ws_clubes.cell(row=new_row, column=2).value = short_name
    ws_clubes.cell(row=new_row, column=3).value = estadio
    ws_clubes.cell(row=new_row, column=4).value = dt
    ws_clubes.cell(row=new_row, column=5).value = str(presupuesto)
    ws_clubes.cell(row=new_row, column=6).value = str(presupuesto)
    ws_clubes.cell(row=new_row, column=7).value = logo
    ws_clubes.cell(row=new_row, column=8).value = str(new_row - 1)
    print("  ✅ Ficha del club registrada en 'Clubes'")

    wb.save(EXCEL_FILE)
    print(f"\n🎉 ¡Club '{nombre}' agregado exitosamente!")
    return True

def desplegar_a_produccion():
    print("\n" + "=" * 65)
    print("🚀 DESPLEGANDO CAMBIOS A PRODUCCIÓN (GitHub Pages)...")
    print("=" * 65)
    try:
        # 1. Asegurar procesamiento de base de datos
        print("\n[1/3] Auditando y sincronizando base de datos local...")
        res = subprocess.run([sys.executable, "process_lmi_excel.py", "--yes"])
        if res.returncode != 0:
            print("❌ La validación de la base de datos falló. Se canceló el despliegue.")
            return False

        # 2. Git add y commit
        print("\n[2/3] Empaquetando archivos para despliegue...")
        subprocess.run([
            "git", "add", 
            "data.js", "app.js", "index.html", "style.css", 
            "process_lmi_excel.py", "*.xlsx", "Logos Equipos", 
            "Imagenes", "gestor_clubes.py", "gestor_clubes.bat", "actualizar_web.bat"
        ], check=False)

        # Comprobar si hay cambios para commit
        staged = subprocess.run(["git", "diff", "--staged", "--quiet"])
        if staged.returncode != 0:
            subprocess.run(["git", "commit", "-m", "Actualización de clubes y base de datos web"], check=True)
            print("   ✅ Commit generado.")
        else:
            print("   ℹ️ No hay archivos nuevos pendientes de commit.")

        # 3. Git push
        print("\n[3/3] Subiendo cambios a GitHub (origin/main)...")
        push_res = subprocess.run(["git", "push", "origin", "main"])
        if push_res.returncode == 0:
            print("\n" + "=" * 65)
            print("✅ ¡ÉXITO TOTAL! Los cambios ya están en camino a producción.")
            print("🌐 GitHub Pages tardará aproximadamente 1 a 2 minutos en actualizarse.")
            print("💡 Si ya pasaron 2 minutos y no los ves, presiona Ctrl + F5 en la web.")
            print("=" * 65)
            return True
        else:
            print("\n⚠️ No se pudo realizar el push a GitHub. Revisa tu conexión de red o credenciales.")
            return False
    except Exception as e:
        print(f"\n❌ Error durante el despliegue: {e}")
        return False

def sincronizar_y_desplegar(wb_changed=True):
    if wb_changed:
        sinc = input("\n¿Deseas sincronizar la base de datos web ahora? (S/N) [S]: ").strip().lower()
        if sinc in ['n', 'no']:
            return
        subprocess.run([sys.executable, "process_lmi_excel.py", "--yes"])
    
    pub = input("\n¿Deseas publicar los cambios en PRODUCCIÓN (GitHub Pages) ahora? (S/N) [S]: ").strip().lower()
    if pub not in ['n', 'no']:
        desplegar_a_produccion()

def main():
    while True:
        if not os.path.exists(EXCEL_FILE):
            print(f"❌ Error: No se encontró '{EXCEL_FILE}'.")
            return
            
        wb = openpyxl.load_workbook(EXCEL_FILE)
        
        print_header("GESTOR INTEGRAL DE CLUBES - PLATAFORMA LMI")
        print("  [1] Ver clubes activos y estado de plantillas")
        print("  [2] Añadir un nuevo club a la liga (con 23 jugadores)")
        print("  [3] Modificar datos de un club (DT, Estadio, Presupuesto, etc.)")
        print("  [4] Eliminar un club (borrado limpio de todas las hojas)")
        print("  [5] Sincronizar Base de Datos local (ejecutar auditoría)")
        print("  [6] Publicar y desplegar a PRODUCCIÓN (GitHub Pages)")
        print("  [7] Salir")
        print("=" * 65)
        
        try:
            opcion = input("Elige una opción (1-7): ").strip()
        except (EOFError, KeyboardInterrupt):
            print("\nHasta luego.")
            break
            
        if opcion == "1":
            listar_clubes(wb)
        elif opcion == "2":
            changed = anadir_club(wb)
            if changed:
                sincronizar_y_desplegar(wb_changed=True)
        elif opcion == "3":
            changed = modificar_club(wb)
            if changed:
                sincronizar_y_desplegar(wb_changed=True)
        elif opcion == "4":
            changed = eliminar_club(wb)
            if changed:
                sincronizar_y_desplegar(wb_changed=True)
        elif opcion == "5":
            print("\n🔄 Sincronizando con process_lmi_excel.py...")
            subprocess.run([sys.executable, "process_lmi_excel.py"])
            sincronizar_y_desplegar(wb_changed=False)
        elif opcion == "6":
            desplegar_a_produccion()
        elif opcion == "7":
            print("\n¡Operación finalizada! Hasta luego.")
            break
        else:
            print("Opción no válida. Ingresa un número del 1 al 7.")
            
        try:
            input("\nPresiona ENTER para volver al menú principal...")
        except (EOFError, KeyboardInterrupt):
            break

if __name__ == "__main__":
    main()
