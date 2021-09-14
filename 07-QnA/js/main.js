//Dado un string de palabras, devolver la palabra m�s larga.

/* let userArray = []
let askUser = prompt("How many items you want in the string?")

getLargestString()

function getLargestString (){
    for(let i=0; i<askUser; i++){
        let arrayIteam = prompt("Give the item" + [i])
        userArray.push(arrayIteam)       
    }
    let longest = userArray.reduce(function(a,b){
        return a.length > b.length ? a : b
    },"")
    console.log(longest)
    console.log("The item with the largest length is: " + longest)
} */

//Crear un programa que permita detectar si una frase finaliza con punto.

/* let fraseConPunto = (frase) =>{
    let fraseDelUsuario = prompt("Dame la frase a analizar")
    if(fraseDelUsuario.endsWith(".")==true){
        console.log("La Frase finaliza con punto")
    }else{
        console.log("La Frase no finaliza con punto")
    }
    return fraseDelUsuario
}
fraseConPunto() */

//Crear un programa que permita al usuario retornar el numero de coincideas de una palabra en una frase que el mismo usuario introduzca

/* let numeroDeCoincidencias = () =>{
let fraseDelUsuario = prompt("Dame la frase que vamos analizar")
let palabraBuscar = prompt("Dame la palabra que vamos a buscar")
let guardaPalabra = new RegExp(palabraBuscar,"gi")
let operacion = fraseDelUsuario.match(guardaPalabra)
let cantidadVeces = operacion.length
console.log("La palabra " + palabraBuscar + " aparece " + cantidadVeces + " veces") 
return cantidadVeces

}
numeroDeCoincidencias ()  */

// Crear un programa que permita al usuario extraer uns subcadena de una cadena dada.


/* 
let cadenaUsuario = prompt("Dame la cadena a usar")
let subCadenaStart = parseInt(prompt("Desde que caracter quieres extraer la cadena?"))
let subCadenaEnd = parseInt(prompt("Hasta que caracter quieres extraer la cadena?"))
console.log(cadenaUsuario.substr(subCadenaStart,subCadenaEnd))

 */

// Crear un programa que permita comparar dos palabras dadas por el usuario y determine si son iguales o no.

let comparar = (palabra1,palabra2) => palabra1===palabra2 ? "Las palabras son iguales" : "Las palabras son diferentes"

console.log(comparar(prompt("Ingresa palabra 1"),prompt("Ingresa palabra 2")))

