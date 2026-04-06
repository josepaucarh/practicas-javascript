Ejercicio 02: Almacén de Tecno-Ventas

Sistema de gestión de inventario para una tienda de celulares.

Funcionalidades:
1.Seguridad: Acceso protegido por contraseña (`admin123`) con límite de 3 intentos.
2.Gestión de Stock: Consulta de unidades disponibles.
   - Registro de ventas (con validación de stock suficiente).
   - Reposición de mercadería.
3.Validaciones: Control de entradas vacías, cancelaciones de usuario y datos no numéricos.

Lógica aplicada:
* Ciclos while anidados.
* Estructura de control switch para el menú.
* Métodos de String como toLowerCase() y trim().