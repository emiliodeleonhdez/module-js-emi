/*Ejercicios */
/*
Deducir:
input: "kodemia"
output: "aimedok"
*/

/*
Crear una funcion que me indique si un string comienza con
 -una vocal
 -consonante
 -numero
 -caracter especial
*/
/* 
let palabraAInvertir = prompt("Dame una palabra")

function invertirPalabra (resultadoPalabraInvertida){

    return palabraAInvertir.split("").reverse()
}
console.log(invertirPalabra()) */

/*
input: "a very large string"
output: "A VeRy lArGe sTrInG" 
input: "abcdefg"
output: "AbCdEfG"
*/


let aVeryLargeString = prompt("Dame un string muy largo")

function transformAString (){
    for(let i=0; i<aVeryLargeString.length; i++){
        if (i%2===0){
            aVeryLargeString[i] += aVeryLargeString[i].charAt(0).toUpperCase
        }else{
            aVeryLargeString[i] += aVeryLargeString[i].charAt(0).toLowerCase
        }

    }

}
console.log(transformAString())