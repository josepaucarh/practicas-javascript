Reto 03: El Supervisor de Turno

Sistema para el control de temperaturas en maquinaria industrial.

#Descripción del Problema:
El objetivo es auditar 3 máquinas de una planta. Por cada máquina, el supervisor debe ingresar 2 registros de temperatura. 

#Reglas del Sistema:
Validación: Solo se aceptan temperaturas entre 0 y 100°C.
Seguridad: Si el usuario deja el campo vacío o ingresa texto no numérico, el sistema arroja un error y pide el dato de nuevo.
Interrupción: Se puede cancelar el proceso en cualquier momento usando el botón "Cancelar" del prompt.
Resultado: El sistema calcula y muestra en consola el promedio de temperatura por cada máquina.

#Conceptos aplicados:
* Ciclos `for` anidados.
* Ciclo `while` para validación infinita hasta que el dato sea correcto.
* Manejo de promedios y redondeo con `.toFixed()`.