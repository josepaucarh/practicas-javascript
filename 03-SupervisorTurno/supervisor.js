//Reto 1 El supervisor de Turno 
let promedio=0;
let operacionCancelada=false;
const MAQUINAS=3;
const REGISTRO=2;

for(let i=0; i<MAQUINAS; i++)
{
    let temperaturaTotal=0;
    
    for(let j=0; j<REGISTRO; j++)
    {
        let temperaturaValida= false;
        
        while(!temperaturaValida)
            {
                let temperaturaInicial= prompt(`Revisando la máquina N°${i+1} - Ingresa la temperatura (°C) del N°${j+1}`);

                    if(temperaturaInicial === null)
                    {
                        operacionCancelada=true;
                        break; 
                    }

                    if(temperaturaInicial.trim() === "")
                    {
                        alert("Error: El campo se encuentra vacío");
                        continue;
                    }
                
                    let temperatura=Number(temperaturaInicial);
                
                    if(isNaN(temperatura) || temperatura <0)
                    {
                        alert("Error: Ingresa una opción válida");
                        continue;
                    }
                    
                    if(temperatura >=0 && temperatura <= 100)
                    {
                        temperaturaTotal +=temperatura;
                        temperaturaValida=true;
                    }else{
                        alert("Error: ingresa un número válido");
                    }
                         
            }
        if(operacionCancelada)break; 
    }
    
    if(operacionCancelada)break;
    promedio= temperaturaTotal / REGISTRO;
    console.log(`Maquina N°${i+1}:  Tiene un promedio de ${promedio.toFixed(2)}°C`);
}