let alumnos=4;
let registro=true;

for(let i=0; i<alumnos; i++)
{
    let ingresarNotas=false;

    while(!ingresarNotas)
    {
        let entrada=prompt(`Ingresa la nota del alumno N°${i+1}`);

        if(entrada ===null)
        {
            if(confirm("¿Desea cerrar el registro de notas?"))
                {
                    registro=false;
                    break;
                }
            continue;
        }
        if(entrada.trim()=== "")
        {
            alert("Error: El campo se encuentra vacío");
            continue;
        }

        let notas=Number(entrada);

        if(!isNaN(notas) && notas >0 && notas <=20)
        {
            switch(true)
            {
                case (notas>=0 && notas <=10):
                    alert("Desaprobado - Reforzamiento");
                    break;
                case (notas>=11 && notas <=15):
                    alert("Aprobado - Regular");
                    break;
                case (notas>=16 && notas<=20):
                    alert("Excelente - Exonerado");
                    break;
                default:
                    alert("Error: La nota ingresada no es correcta");
            }
            ingresarNotas=true;
        }else{
            alert("Error: Ingresa números válidos");
        }
    }
    if(!registro)break;
}