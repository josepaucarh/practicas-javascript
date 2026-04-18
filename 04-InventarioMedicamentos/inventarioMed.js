let cajasMed=3;
let totalAmpollas=0;
let cancelarRegistro=true;

for(let i=0; i<cajasMed; i++)
{
    let ingresoValido=false;

    while(!ingresoValido)
    {
        let validarcajas=prompt(`Ingresa la cantidad de ampollas de la caja ${i+1}`);

        if(validarcajas === null)
        {
            cancelarRegistro=false;
            break;
        }
        
        if(validarcajas.trim() === "")
        {
            alert("Error: el campo se encuentra vacío");
            continue;
        }
        
        let numeroAmpo=Number(validarcajas);

        if(isNaN(numeroAmpo) || numeroAmpo <=0)
        {
            alert("Error: un número válido");
            continue;
        }
        
        if(numeroAmpo >=1 && numeroAmpo <=50)
        {
            totalAmpollas +=numeroAmpo;
            ingresoValido=true;
        }else{
            alert("Error: Cantidad no permitida para esta caja");
            continue;
        }
    }
    if(!cancelarRegistro)break;
    console.log(`Caja N° ${i+1}: ${totalAmpollas} ampollas`);

}

