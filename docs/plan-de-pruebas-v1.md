
# QA-PLAN-001 | Plan de Pruebas de Software

**Proyecto:** Aseguramiento de calidad y automatización de pruebas  
**Institución:** TECSUP  
**Aplicación bajo prueba:** Practice Software Testing (Toolshop)  
**Versión:** 1.0  
**Fecha:** 29/10/2026  
**Estado:** Planificación inicial

## 1. Objetivo

Definir la estrategia, el alcance, los criterios de calidad, los recursos y las actividades necesarias para evaluar las funcionalidades de Toolshop mediante pruebas manuales y automatizadas.

## 2. Alcance de las pruebas

Se consideran las siguientes funcionalidades, según su disponibilidad en la aplicación:

- Autenticación de usuarios.
- Búsqueda de productos.
- Visualización del catálogo.
- Detalle de productos.
- Filtros y ordenamiento.
- Carrito de compras.
- Validaciones de formularios y mensajes de error.

## 3. Estrategia de pruebas

### 3.1. Pruebas manuales

- Diseñar al menos ocho casos de prueba.
- Definir precondiciones, pasos y resultados esperados.
- Ejecutar escenarios positivos y negativos.
- Registrar resultados y evidencias reales.

### 3.2. Pruebas exploratorias

- Explorar funcionalidades y comportamientos inesperados.
- Identificar condiciones límite.
- Registrar hallazgos de usabilidad y accesibilidad.

### 3.3. Pruebas automatizadas

- Utilizar Playwright con JavaScript.
- Automatizar la carga inicial, la búsqueda y el detalle de productos.
- Ejecutar pruebas en Chromium, Firefox y WebKit.
- Documentar los resultados de ejecución.

## 4. Entorno y herramientas

| Elemento | Herramienta |
|---|---|
| Aplicación | Practice Software Testing (Toolshop) |
| Repositorio | GitHub |
| Automatización | Playwright |
| Lenguaje | JavaScript |
| Gestión de defectos | Jira |
| Navegadores | Chromium, Firefox y WebKit |

## 5. Criterios de entrada

- Aplicación disponible para las pruebas.
- Alcance definido.
- Casos de prueba preparados.
- Datos de prueba identificados.
- Herramientas configuradas.

## 6. Criterios de salida propuestos

- Ejecutar el 100 % de los casos priorizados.
- Alcanzar al menos el 90 % de aprobación de los casos ejecutados.
- No mantener defectos críticos abiertos en los flujos priorizados.
- Registrar evidencias y resultados en el repositorio.

Estos criterios son metas propuestas y no resultados obtenidos.

## 7. Riesgos del proyecto

| ID | Riesgo | Impacto | Mitigación |
|---|---|---|---|
| R-01 | Indisponibilidad de Toolshop | Alto | Reprogramar las pruebas y registrar el bloqueo |
| R-02 | Cambios en la interfaz | Medio | Actualizar los localizadores de Playwright |
| R-03 | Datos de prueba inconsistentes | Medio | Validar precondiciones y utilizar datos controlados |

## 8. Entregables

- Documento de alcance de calidad.
- Plan de pruebas.
- Casos de prueba manuales.
- Matriz de trazabilidad.
- Tabla de decisiones.
- Reporte de defectos.
- Evidencias de ejecución.
- Pruebas automatizadas con Playwright.

## 9. Métricas de calidad

Se realizará seguimiento a:

- Cantidad de casos planificados.
- Cantidad de casos ejecutados.
- Casos aprobados, fallidos y bloqueados.
- Porcentaje de ejecución y aprobación.
- Defectos identificados por severidad.
- Resultados de las pruebas automatizadas.

## 10. Estado del proyecto

**Plan de pruebas elaborado.**

La ejecución, los resultados y las evidencias reales se incorporarán conforme avance el proyecto.

