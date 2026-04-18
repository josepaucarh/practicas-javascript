Ejercicio 04: Inventario de Medicamentos
Sistema para el control y validación de suministros médicos (ampollas) por cajas.

Funcionalidades:
Validación de Capacidad: Solo se permiten ingresos de entre 1 y 50 ampollas por caja.

Lógica aplicada:
Ciclos For y While anidados: Para manejar la cantidad de cajas y la validación infinita de cada dato.

Banderas de control: Variable cancelarRegistro para romper múltiples ciclos simultáneamente.

Acumuladores: Suma dinámica del stock total mediante operadores de asignación.

Manejo de Tipos: Uso de Number() y isNaN() para asegurar la integridad de los datos.