//Reto: El Almacén de "Tecno-Ventas"

const CLAVE_ADMIN="admin123";
const USUARIO="José";
let intentos=3;
let accesoValido=false;
let stockCelulares=10;

while(intentos>0)
{
    let pedirClave=prompt("Ingresa tu contraseña");

    if(pedirClave === null) break;

    if(pedirClave.trim() === "")
    {
        alert("El campo de contraseña se encuentra vacío");
        continue;
    }

    if(pedirClave.toLowerCase() === CLAVE_ADMIN)
    {
        accesoValido=true;
        break;
    }else{
        intentos--;
        if(intentos>0)
        {
            alert(`Contraseña incorrecta. Te quedan ${intentos} intentos`);
            continue;
        }else{
            alert("Acceso denegado: Sistema Bloqueado");
            break;
        }
    }
    
}

if(accesoValido)
{
    alert(`Bienvenido ${USUARIO}`);
    let sistemaAbierto=true;

    while(sistemaAbierto)
    {
        let menu=prompt(`¿Qué quieres realizar el día de hoy?
            1.Ver Stock
            2.Registar venta
            3.Reponer Mercadería
            4.Salir`
        );

        if(menu === null) break;

        if(menu.trim() === "")
        {
            alert("Error no se pudo validar esta acción");
            continue;
        }

        let opciones=Number(menu);

        if(isNaN(opciones) || opciones <=0)
        {
            alert("Ingresa una opción válida");
            continue;
        }

        switch(opciones)
        {
            case 1:
                alert(`El almacén cuenta con un stock de ${stockCelulares} celulares`);
                break;
            case 2:
                let ingresarVenta=true;
                while(ingresarVenta)
                {
                    let registro=prompt("Ingresa la cantidad de celulares que se vendió");
                    
                    if(registro === null)break;

                    if(registro.trim() === ""){
                        alert("Error no se pudo validar esta acción");
                        continue;
                    }

                    let registrarVenta=Number(registro);

                    if(isNaN(registrarVenta) || registrarVenta <=0)
                    {
                        alert("El monto ingresado no es válido");
                        continue;
                    }

                    if(registrarVenta > stockCelulares)
                    {
                        alert("Error: el stock es insuficiente para esta venta");
                        continue;
                    }else{
                        stockCelulares -=registrarVenta;
                        alert(`Venta registrada con éxito, tienes una venta de ${registrarVenta} celulares`);
                    break;
                    }
                }   
                break;
            case 3:
                let inventario=true;
                
                while(inventario)
                {
                    let pedirCantidad=prompt("¿Cuántas unidades de celulares vas a reponer?");

                    if(pedirCantidad === null)break;

                    if(pedirCantidad.trim() === "")
                    {
                        alert("Error no se pudo validar esta acción");
                        continue;
                    }

                    let reponerMercaderia=Number(pedirCantidad);

                    if(isNaN(reponerMercaderia) || reponerMercaderia <=0)
                    {
                        alert("El monto ingresado no es válido");
                        continue;
                    }

                    stockCelulares +=reponerMercaderia;
                    alert(`Se está ingresando ${reponerMercaderia} unidades de celulares al almacén`);
                    
                    if(confirm("¿Quieres realizar otro monto?"))continue;
                    break;
                }
                break;
            case 4:
                alert("Cerrando Sesión");
                sistemaAbierto=false;
                break;
            default:
                alert("Porfavor ingresa una opción del menú");
        }


    }

}