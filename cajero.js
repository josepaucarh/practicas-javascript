// Fase 1
const PIN= 2026;
let intentos=3;
let saldoInicial=1000;
let operaciones=0;
let accesoConcedido=false;

while(intentos >0)
{
    let ingreso=prompt(`Ingresa tu PIN, tienes ${intentos} intentos`);

    if(ingreso === null) break;

    if(ingreso.trim() === "")
    {
        alert("Error: el campo se encuentra vacío");
        continue;
    }

    let ingresaContrasenia=Number(ingreso);

    if(isNaN(ingresaContrasenia) || ingresaContrasenia <0)
    {
        alert("Ingresa un número válido");
        continue;
    }


    if(ingresaContrasenia === PIN)
    {   
        accesoConcedido=true;
        break;
    }else{
            intentos--;
            if(intentos >0)
            {
                alert(`PIN incorrecto, te quedan ${intentos} intentos`);
            }else{
                alert(`Cuenta Bloqueada`);
            }
        }
}

//Fase 2
if(accesoConcedido)
{
    alert("Acceso Concedido. Bienvenido");

    let menuPrincipal= true;

while(menuPrincipal)
{
    let menuAcciones=prompt("¿Qué quieres hacer? 1. Depositar | 2. Ver cuántas operaciones llevo | 3. Ver Saldo | 4.Retirar | 5.Salir");

    if(menuAcciones === null) 
    {
      if(confirm("estas seguro de salir"))break;
      continue;  
    }

    if(menuAcciones.trim() === "")
    {
        alert("El campo no puede estar vacío, ingresa una opción válida");
        continue;
    }

    let operacion = Number(menuAcciones);

    if(isNaN(operacion) || operacion <=0)
    {
        alert("Ingresa opciones válidas del menú");
        continue;
    }

    switch(operacion)
    {
        case 1:
            while(true)
            {
                let montoDeposito=prompt("¿Ingresa el monto a depositar?");
            
                if(montoDeposito === null)
                {
                    if(confirm("¿Estas seguro de querer salir?"))break;
                    continue;
                }
            
                if(montoDeposito.trim() === "")
                {
                    alert("Porfavor ingresa un monto válido");
                    continue;
                }

                let montoIngresado=Number(montoDeposito);

                if(isNaN(montoIngresado) || montoIngresado <=0)
                {
                alert("No se pudo completar esta acción, vuelva a intentarlo");
                continue;
                }

                saldoInicial +=montoIngresado;
                operaciones++;
                alert(`La operación fue un éxito. Haz depositado $${montoIngresado}`);

                if(confirm("¿Deseas realizar otra operación de este tipo?"))continue;
                break;
            }
            break;
        case 2:
            alert(`Llevas ${operaciones} operaciones`);
            break;
        case 3:
            alert(`Tienes $${saldoInicial} en tu cuenta de ahorros`);
            break;
        case 4:
            if (saldoInicial === 0)
            {
                alert("Tu saldo es $0. No puedes realizar retiros en este momento.");
                break;
            }

            while(true)
            {
                let retirarDinero= prompt("¿Ingresa el monto a retirar?");

                if(retirarDinero === null)
                {
                    if(confirm("¿Deseas cancelar la operación?"))break;
                    continue;
                }

                if(retirarDinero.trim() === "")
                {
                    alert("Acción inválida, el campo no puede estar vacío");
                    continue;
                }

                let retiro=Number(retirarDinero);

                if(isNaN(retiro) || retiro <=0)
                {
                    alert("Ingresa un monto válido, vuelve a intentarlo");
                    continue;
                }

                if(retiro > saldoInicial)
                {
                    alert("Saldo insuficiente, vuelve a intertalo");
                    continue;
                }

                saldoInicial -=retiro;
                operaciones++;
                alert(`Retiro exitoso. Haz retirado $${retiro}`);
                if(confirm("¿Deseas realizar otra operación de este tipo?"))continue;
                break;
            }
            break;
        case 5:
            alert("Saliendo del cajero....");
            menuPrincipal=false;
            break;
        default:
            alert("Ingresa una opción válida");
    }
}
}