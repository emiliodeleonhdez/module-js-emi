/* let aVeryLargeString = prompt("Dame un string muy largo")
let result = ""


for(let i=0; i<aVeryLargeString.length; i++){
    if (i%2 === 0){
        result += aVeryLargeString.charAt(i).toUpperCase()
    }else{
        result += aVeryLargeString.charAt(i).toLowerCase()
    }

}
console.log(result)
 */


// Ejercicio 1

let palabra = prompt("ingrese palabra")
let i=0
while(i=1){

    switch(palabra){
        case "anaconda":
            console.log("true")
            i++
            break;
        case "belzeebub":
            console.log("true")
            i++
            break;
        case "koder":
            console.log("false")
            i++
            break;
        case "cerveza":
            console.log("false")
            i++
            break;
        default:
            console.log("vuelve a intentar")
            palabra = prompt("ingrese palabra")
    }

} 

// Ejercicio 2 

let numero = prompt("Ingrese un numero del 1 al 10")
i = 0
let numero1=1
numero = Number(numero);
while(i < 100){

    let operacion = numero1 * numero;
    console.log (`${numero1} x ${numero} = ${operacion}`);
    i++;
    numero1++;
}


//// Ejercio 3

let numerosDelUsuario = prompt("Dame un numero del 10 - 100")
let flag = 0
let convertToNumber = Number(numerosDelUsuario)

if (convertToNumber>=10 && convertToNumber<=100){
    for (let i=1; i<=convertToNumber; i++){
        if (i%2===0){
            console.log(i)
        }
    }
}else{
    alert ("not in range")
}

// Ejercicio 4

let value = prompt("Enter here your numeritos");
sum = 0;
while (value) {
  sum += value % 10;
  value = Math.floor(value / 10);
}

// Ejercicio 5

let patron="*"
i = 0
while(i < 10){

    console.log(patron)
    patron+="*"
    i++;
}

// Ejercicio 6

let total=0;
for(i=1;i<=100;i++)
{
    if (i % 3 == 0 || i % 5 == 0) {
        total+=i;
        }      
      
}

console.log("El total de los multiplos de 3 y 5 es:", total )

//// Ejercicio 7

/*
Ejercicio 7:
Deducir: 
input: Hola como estas
output: holaComoEstas
input: hello Koders
output: helloKoders
*/

let fraseNormal = ("Hola como estas")
let splitFrase = fraseNormal.split(/\s/)
let resultado = splitFrase[0].toLowerCase() + splitFrase2[1].charAt(0).toUpperCase() +splitFrase2[1].slice(1)  + splitFrase2[2].charAt(0).toUpperCase() +splitFrase2[2].slice(1).toLowerCase()
console.log(resultado)
 
let fraseNormal2 = ("hello Koders")
let splitFrase2 = fraseNormal2.split(/\s/)
let resultado2 = splitFrase2[0].toLowerCase() + splitFrase2[1].charAt(0).toUpperCase() + splitFrase2[1].slice(1)
console.log(resultado2)

// Ejercicio 8

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