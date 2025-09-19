# Ejemplo AVA - Para pruebas unitarias y de integración

Breve: AVA es un corredor de pruebas para JavaScript/Node.js, rápido y con soporte ESM. Este repositorio contiene un ejemplo simple con funciones en `src/math.js` y pruebas en `test/math.test.js`.

## Tipos de pruebas

- Pruebas unitarias: verifican funciones/pequeñas unidades aisladas (por ejemplo `add`, `multiplicar`).
- Pruebas de integración: verifican la interacción entre módulos o con recursos externos. Se pueden organizar en `test/unit` y `test/integration`.

## Requisitos

- Node.js 16+ (recomendado). Verificar:

  ```bash
  node -v
  npm -v
  ```

- En proyectos con import/export ESM añadir `"type": "module"` en `package.json`.

## Inicialización rápida (Linux)

1. Crear el proyecto (si aún no existe):

   ```bash
   npm init -y
   ```

2. Instalar AVA como dependencia de desarrollo:

   ```bash
   npm install --save-dev ava@latest
   ```

3. Añadir script de test en `package.json` (si no existe):

   ```json
   "scripts": {
     "test": "ava"
   }
   ```

4. Ejecutar todas las pruebas:

   ```bash
   npm test
   ```

5. Ejecutar una prueba concreta:

   ```bash
   npx ava test/math.test.js
   # o
   npm test -- test/math.test.js
   ```

## Inicialización rápida (Windows - PowerShell)

1. Abrir PowerShell en la carpeta del proyecto.
2. Ejecutar:

   ```powershell
   npm init -y
   npm install --save-dev ava@latest
   ```

3. Ejecutar pruebas:

   ```powershell
   npm test
   # Para una prueba concreta (usar ruta con backslashes o con /)
   npx ava .\test\math.test.js
   # o
   npm test -- test\math.test.js
   ```

## Inicialización (Windows - CMD)

```cmd
npm init -y
npm install --save-dev ava@latest
npm test
```

## Organización recomendada

- src/
  - math.js
- test/
  - unit/
    - math.test.js
  - integration/
    - api.integration.test.js

## Consejos para integración

- Usar `test.before`, `test.after` para setup/teardown.
- Marcar tests que deben ejecutarse en orden con `test.serial`.
- Usar bases de datos/servicios de prueba o mocks para determinismo.

## Errores comunes y soluciones rápidas

- Error: "Cannot use import statement outside a module" / ERR_REQUIRE_ESM
  Solución: en `package.json` añadir:

  ```json
  {
    "type": "module"
  }
  ```

  O renombrar archivos a `.mjs` / `.cjs` según el caso.

- Error: "Cannot find module '../src/math.js'"
  Solución: comprobar la ruta relativa desde el archivo de prueba y que la importación incluya la extensión `.js`:

  ```js
  import { add } from "../src/math.js";
  ```

- Error: "ava: command not found"
  Solución:

  ```bash
  npm install
  # usar npx si no está en PATH
  npx ava
  ```

- Tests que dependen del orden o comparten estado
  Solución: usar `test.serial` o hooks (`test.beforeEach`, `test.afterEach`) para aislar el estado.

- Problemas por versión de Node
  Solución: actualizar Node a 16+ y reinstalar dependencias:

  ```bash
  node -v
  # si necesita actualizar, usar nvm o instalador oficial
  ```

## Cómo depurar una prueba

1. Ejecutar sólo la prueba que interesa:

   ```bash
   npx ava test/math.test.js
   ```

2. Añadir `console.log` en el código o en la prueba.
3. Revisar errores de import/export (`package.json`, extensiones).

## Comandos útiles adicionales

- Ejecutar con más detalles (verbose si disponible):

  ```bash
  npx ava --verbose
  ```

- Ejecutar tests que coincidan con patrón:

  ```bash
  npx ava "test/**/*math*.test.js"
  ```

## Ejemplo rápido (ya en este proyecto)

- Ejecutar todas las pruebas:

  ```bash
  npm test
  ```

- Ejecutar una prueba específica:

  ```bash
  npx ava test/math.test.js
  ```

Notas finales: con Node 16+ y `"type": "module"` en `package.json`, las pruebas ESM deberían ejecutarse correctamente con `npm test`. Si surge algún error concreto, ejecutar el comando exacto que produjo el error y revisar el mensaje para aplicar la solución indicada arriba.

