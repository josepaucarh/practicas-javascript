Ejercicio 05: Sistema de Calificaciones Académicas
Sistema para el registro y clasificación de notas de estudiantes con validación de seguridad.

Funcionalidades:
Clasificación Automática: Utiliza lógica de rangos para asignar un estado al alumno:

0 a 10: Desaprobado - Reforzamiento.

11 a 15: Aprobado - Regular.

16 a 20: Excelente - Exonerado.

Doble Confirmación de Salida: Si el usuario intenta cancelar, el sistema pide una confirmación extra mediante un confirm() antes de cerrar el registro.

Validaciones: - Rango estricto de notas (0 a 20).

Detección de campos vacíos y datos no numéricos.

Gestión de Ciclos: Capacidad de procesar hasta 4 alumnos de forma secuencial.

Lógica aplicada:
Switch con Evaluación Booleana: Uso de switch(true) para manejar múltiples rangos de comparación en un solo bloque.

Control de Flujo Avanzado: Combinación de break y continue para manejar la navegación dentro de los ciclos anidados.

Interfaz de Usuario: Implementación de prompt(), alert() y confirm() para una interacción dinámica.

Banderas de Estado: Uso de la variable registro para gestionar la terminación global del programa.