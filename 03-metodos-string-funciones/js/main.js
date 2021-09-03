// string 
// Es un dato primitivo
let nombre = "Emilio"
let apellido = "De Leon"
let saludo = new String ("Hola Amigos")

let nombreCompleto = nombre + " " + apellido
console.log(nombreCompleto)

// Template String 
// Acento invertido

let nuevoSaludo = `Hola mi nombre es ${nombre} ${apellido}`
console.log(nuevoSaludo)



let someString = "Hola a todos"
console.log(someString.length)


/* // function someName(parametros){
    body
} */

/* let numberOne = 45
let numberTwo = 20

let suma = numberOne + numberTwo
console.log(suma) */

let numberOne = 45
let numberTwo = 20
console.log(".......................")
function sumaDeDosNumeros(numberOne, numberTwo){
    let suma = numberOne + numberTwo
/*     console.log(suma) */
    return suma
}
let resultSuma = sumaDeDosNumeros(100,20)
console.log(resultSuma)

// invocar

sumaDeDosNumeros(40,60)

console.log("........................")

function evaluarSiEsMayor(numero1,numero2){
    let resultado = numero1 > numero2 ? "El primero es mayor" : "El segundo es mayor"
    return resultado
}

let nuevoResultado = evaluarSiEsMayor(10,20)
console.log(nuevoResultado)


let name = "Emilio"
console.log(name.charAt(5))

//////////////////////////////////////////////

//solicitar al usuario su nombre y sus apellidos
//Regresar en una sola cadena donde el nombre sea minuscula y los apellidos sean mayus

let nombreEj = prompt("Give me the name")
let lastnames = prompt("Give me the lastnames")

let convert_toLower = nombreEj.toLocaleLowerCase()
let convert_toUpper = lastnames.toLocaleUpperCase()

let resultEj = `Hola mi nombre es ${convert_toLower} ${convert_toUpper}`


console.log(resultEj)
