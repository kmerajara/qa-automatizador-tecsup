# QA Automatizador TECSUP

Proyecto académico de aseguramiento de calidad y automatización de pruebas sobre Practice Software Testing (Toolshop).

## Tecnologías
- JavaScript
- Node.js
- Playwright
- Chromium
- GitHub Actions

## Casos automatizados
- CP-001: Visualizar catálogo
- CP-002: Buscar productos
- CP-003: Búsqueda sin resultados
- CP-004: Ver detalle del producto
- CP-005: Filtrar productos
- CP-006: Ordenar productos
- CP-007: Inicio de sesión inválido
- CP-008: Validar campos obligatorios

## Ejecución local
```bash
npm install
npx playwright install chromium
npx playwright test tests/toolshop.spec.js --browser=chromium --workers=1
```

## Resultados
- Ejecución local: 8 pruebas aprobadas, 0 fallidas.
- GitHub Actions: 8 pruebas fallidas debido a HTTP 403 (acceso bloqueado desde el entorno remoto). No se considera evidencia de defectos funcionales.

## Evidencias y documentación
- `evidencias/`: capturas de ejecución.
- `docs/`: resultados y documentación QA.
- `tests/toolshop.spec.js`: pruebas automatizadas.

## Estado
Automatización local validada. Ejecución remota pendiente de resolver restricción de acceso.
