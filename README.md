# Ejemplo AVA mínimo

AVA es un corredor de pruebas para JavaScript/Node.js, rápido y con soporte ESM. Este repositorio contiene un ejemplo simple con funciones en `src/math.js` y pruebas en `test/math.test.js`.

Qué tipo de pruebas:
- Pruebas unitarias: verifican funciones/pequeñas unidades aisladas (por ejemplo `add`, `multiplicar`).
- Pruebas de integración: verifican la interacción entre módulos o con recursos externos. En AVA se suelen organizar en carpetas `test/unit` y `test/integration`, y usar `test.serial` o hooks (`test.before`, `test.after`) para control de orden y setup/teardown.

Requisitos
- Node.js 16+ (recomendado). Verificar con:
  - node -v
  - npm -v

Inicialización y comandos (Linux)
1. Crear el proyecto (si aún no está):
   - npm init -y
2. Instalar AVA como dependencia de desarrollo:
   - npm install --save-dev ava@latest
3. Asegurarse de que `package.json` tiene `"type": "module"` si usa import/export ESM.
4. Añadir script de test (ya existe en este proyecto):
   - "scripts": { "test": "ava" }
5. Ejecutar tests:
   - npm test
   - o para una prueba concreta:
     - npx ava test/math.test.js
     - o npm test -- test/math.test.js

Inicialización y comandos (Windows - PowerShell)
1. Abrir PowerShell en la carpeta del proyecto.
2. Ejecutar:
   - npm init -y
   - npm install --save-dev ava@latest
3. Verificar `"type": "module"` en package.json si usa ESM.
4. Ejecutar tests:
   - npm test
   - o npx ava test\math.test.js
   - o npm test -- test\math.test.js

Estructura recomendada
- src/
  - math.js
- test/
  - unit/ (opcional)
    - math.test.js

Consejos para pruebas de integración
- Use test.before / test.after para setup y teardown (bases de datos, servidores).
- Marque tests que deben ejecutarse en serie con test.serial para evitar interferencias.
- Mantenga los tests determinísticos: use bases de datos de prueba o mocks.

Errores comunes y soluciones rápidas
- "Cannot use import statement outside a module" o ERR_REQUIRE_ESM:
  - Solución: agregar `"type": "module"` a package.json o usar extensiones `.mjs` / `.cjs` según corresponda.
- "Cannot find module '../src/math.js'":
  - Compruebe la ruta relativa desde el archivo de prueba y que incluya la extensión `.js`.
- "ava: command not found" o AVA no se ejecuta:
  - Asegúrese de haber instalado la dependencia: `npm install`.
  - Desde npm script (npm test) no debería haber problema; si usa AVA globalmente, preferible usar npx `npx ava`.
- Tests que fallan por orden o estado compartido:
  - Use `test.serial` para pruebas que deben ejecutarse en orden.
  - Use hooks `test.before`, `test.beforeEach`, `test.after`, `test.afterEach` para aislar estado.
- Problemas de versión de Node:
  - Actualice Node si usa características ESM modernas. AVA v6 requiere versiones recientes; use Node 16+.
- Problemas de permisos en Windows (PowerShell):
  - Ejecutar PowerShell como administrador no suele ser necesario; si hay errores por PATH o execution policy, ejecutar desde PowerShell normal y usar `npx` o `npm test`.

Cómo depurar una prueba
1. Ejecutar una única prueba para aislar:
   - npx ava test/math.test.js
2. Agregar `console.log` en la prueba o en el código fuente a probar.
3. Si el error es de import/export, revisar `package.json` y las extensiones de archivo.

Ejemplo rápido (usar ya en este proyecto)
- Ejecutar todas las pruebas:
  - npm test
- Ejecutar una prueba específica:
  - npx ava test/math.test.js

Notas finales
- El proyecto de ejemplo ya incluye `src/math.js` con exportaciones ESM y `test/math.test.js` que importa usando rutas relativas con extensión `.js`. Con Node 16+ y `"type": "module"` en package.json, las pruebas deberían ejecutarse con `npm test` sin cambios adicionales.
