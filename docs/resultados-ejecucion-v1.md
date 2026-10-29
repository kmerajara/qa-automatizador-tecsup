# QA-EJEC-001 | Resultados de ejecución – Toolshop

**Proyecto:** QA Automatizador TECSUP  
**Aplicación:** Practice Software Testing (Toolshop)  
**Fecha de ejecución:** 29/10/2026  
**Herramientas:** Playwright, JavaScript, Chromium y GitHub Actions

## 1. Resultados de pruebas locales

| Caso | Escenario | Resultado |
|---|---|---|
| CP-001 | Visualizar catálogo | Aprobado |
| CP-002 | Buscar productos | Aprobado |
| CP-003 | Búsqueda sin resultados | Aprobado |
| CP-004 | Ver detalle del producto | Aprobado |
| CP-005 | Filtrar productos | Aprobado |
| CP-006 | Ordenar productos | Aprobado |
| CP-007 | Inicio de sesión inválido | Aprobado |
| CP-008 | Validar campos obligatorios | Aprobado |

**Resultado:** 8 pruebas aprobadas, 0 fallidas.

**Entorno:** Ejecución local en Windows mediante Visual Studio Code y Playwright con Chromium.

## 2. Resultados en GitHub Actions

**Estado:** Ejecución remota bloqueada.

Se ejecutaron los ocho casos automatizados mediante el archivo `tests/toolshop.spec.js`.

El sitio respondió con el código HTTP 403, impidiendo validar las funcionalidades desde GitHub Actions.

**Resultado remoto:** 0 aprobadas, 8 bloqueadas por restricción de acceso.

## 3. Evidencias

- Reporte HTML de Playwright con ocho pruebas aprobadas localmente.
- Captura de consola de PowerShell con resultados satisfactorios.
- Captura de GitHub Actions que evidencia el bloqueo HTTP 403.

## 4. Conclusión

La ejecución local de los ocho casos automatizados fue satisfactoria.

La ejecución remota no pudo completarse debido a restricciones de acceso al sitio web desde GitHub Actions.

Se recomienda mantener las evidencias locales y evaluar un entorno autorizado para futuras ejecuciones remotas.

**Estado final:** Pruebas locales aprobadas. Automatización remota pendiente de habilitación.
