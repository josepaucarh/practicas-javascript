let edad=false;

while(!edad)
{
    let consulta=prompt(`Ingresa tu año de nacimiento (ej: 2000)`);

    if(consulta === null)break;
    if(consulta.trim() === "")
        {
            alert("Error: El campo esta vacío");
            continue;
        }

    let pedirAnio=Number(consulta);

    if(isNaN(pedirAnio) || pedirAnio <=0 || pedirAnio> 2026 || pedirAnio <=1900)
    {
        alert("Error: Ingresa un año válido");
        continue;
    }

    let fechaActual = new Date();
    let anioActual = fechaActual.getFullYear();
    
    let mayorEdad=   anioActual - pedirAnio;

    if(mayorEdad >= 18)
        {
            alert(`Tienes ${mayorEdad} años. Eres mayor de edad`);
        }else{
            alert(`Tienes ${mayorEdad} años. Eres menor de edad`);
        }
        
        edad = true;
}
