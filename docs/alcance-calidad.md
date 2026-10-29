
# QA-ALC-001 | Alcance de Calidad

**Proyecto:** Aseguramiento de calidad y automatización de pruebas  
**Institución:** TECSUP  
**Aplicación bajo prueba:** Practice Software Testing (Toolshop)  
**Versión:** 1.0  
**Estado:** Propuesta inicial

## 1. Objetivo

Definir el alcance, los criterios de calidad y las actividades de pruebas funcionales y automatizadas para evaluar el comportamiento de la aplicación Toolshop.

## 2. Alcance de las pruebas

Se propone evaluar los siguientes módulos y funcionalidades:

- Acceso y autenticación de usuarios.
- Búsqueda de productos.
- Visualización del catálogo y detalle de productos.
- Filtros y ordenamiento de productos.
- Carrito de compras, según las funcionalidades disponibles.
- Validaciones de formularios y mensajes de error.

## 3. Tipos de pruebas

- Pruebas funcionales manuales.
- Pruebas positivas y negativas.
- Pruebas exploratorias.
- Pruebas básicas de accesibilidad.
- Pruebas automatizadas con Playwright.
- Pruebas de compatibilidad en Chromium, Firefox y WebKit.

## 4. Fuera del alcance

Para esta primera versión no se contemplan:

- Pruebas de carga y estrés.
- Pruebas de penetración.
- Auditoría de infraestructura y servidores.
- Validación de transacciones bancarias reales.
- Pruebas de aplicaciones móviles nativas.

## 5. Criterios de calidad propuestos

- Cada caso de prueba tendrá identificador único.
- Los casos incluirán pasos, datos y resultados esperados.
- Los defectos encontrados tendrán evidencia reproducible.
- Los defectos se clasificarán por severidad y prioridad.
- Las pruebas automatizadas contarán con resultados de ejecución.
- Los resultados se documentarán y mantendrán versionados en GitHub.

## 6. Riesgos

| Riesgo | Impacto | Mitigación |
|---|---|---|
| Cambios en Toolshop | Alto | Revisar y actualizar los casos |
| Inestabilidad del entorno | Medio | Repetir y documentar ejecuciones |
| Tiempo limitado de pruebas | Alto | Priorizar funcionalidades críticas |

## 7. Entregables previstos

- Plan de pruebas.
- Casos de prueba manuales.
- Matriz de trazabilidad.
- Reporte de defectos.
- Evidencias de ejecución.
- Scripts de automatización con Playwright.
- Resultados de pruebas automatizadas.

## 8. Herramientas

- GitHub: control de versiones.
- Jira: gestión de incidencias.
- Playwright: automatización de pruebas.
- JavaScript: desarrollo de scripts.
- Navegadores: Chromium, Firefox y WebKit.

## 9. Observaciones

Este documento constituye una propuesta inicial de alcance. Los criterios de aprobación definitivos y los resultados de ejecución se actualizarán conforme al avance del proyecto y las indicaciones del docente.
