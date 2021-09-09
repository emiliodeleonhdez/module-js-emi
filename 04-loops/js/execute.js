let totalSuma=0;

for(i=1;i<=10;i++)
{
    let pregunta=`Ingresa numero ${i}:`;
    let solicitudNumero=prompt(pregunta);
    solicitudNumero=Number(solicitudNumero);
    if (i > 5) {
        totalSuma+=solicitudNumero;
        }      
      
}

console.log("El total de los ultimos 5 numeros es:", totalSuma )