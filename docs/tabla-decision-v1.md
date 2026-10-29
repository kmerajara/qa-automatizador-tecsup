
# QA-TD-001 | Tabla de Decisión

**Proyecto:** Aseguramiento de Calidad y Automatización de Pruebas  
**Institución:** TECSUP  
**Aplicación:** Practice Software Testing (Toolshop)  
**Versión:** 1.0  
**Estado:** Diseño de pruebas

## 1. Objetivo

Diseñar escenarios de prueba mediante una tabla de decisión
para validar el comportamiento del inicio de sesión en Toolshop.

## 2. Condiciones y acciones

La tabla representa reglas funcionales propuestas que deberán
contrastarse con el comportamiento real de la aplicación.

| Condición o acción | R1 | R2 | R3 |
|---|---|---|---|
| Correo informado | Sí | Sí | No |
| Contraseña informada | Sí | Sí | No |
| Credenciales válidas | Sí | No | No aplica |
| Permitir acceso | Sí | No | No |
| Mostrar error de credenciales | No | Sí | No |
| Mostrar validación de campos | No | No | Sí |

## 3. Casos de prueba derivados

### CP-009 | Inicio de sesión válido
- Regla: R1
- Precondición: Usuario de prueba registrado y activo.
- Pasos:
  1. Abrir el formulario de inicio de sesión.
  2. Ingresar credenciales válidas.
  3. Seleccionar Iniciar sesión.
- Resultado esperado: El usuario accede a su cuenta.
- Estado: Diseñado, no ejecutado.

### CP-010 | Inicio de sesión inválido
- Regla: R2
- Precondición: Formulario disponible.
- Pasos:
  1. Abrir el formulario de inicio de sesión.
  2. Ingresar credenciales incorrectas.
  3. Seleccionar Iniciar sesión.
- Resultado esperado: Se rechaza el acceso.
- Estado: Diseñado, no ejecutado.

### CP-011 | Campos obligatorios vacíos
- Regla: R3
- Precondición: Formulario disponible.
- Pasos:
  1. Abrir el formulario de inicio de sesión.
  2. Dejar vacíos el correo y la contraseña.
  3. Intentar enviar el formulario.
- Resultado esperado: El sistema impide el acceso e informa
  los campos obligatorios.
- Estado: Diseñado, no ejecutado.

## 4. Trazabilidad

| Requisito | Caso derivado | Regla |
|---|---|---|
| RF-006 | CP-009 | R1 |
| RF-006 | CP-010 | R2 |
| RF-007 | CP-011 | R3 |

## 5. Observaciones

Los tres casos se derivan de reglas de decisión propuestas.

Su ejecución, resultados y evidencias se registrarán
después de verificar el comportamiento real de Toolshop.
