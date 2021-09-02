/* 

/*     console.log("Hola Koder")

    console.error("Esto es un error")

    console.warn("Esto es un warning")

    let ask_num1 = prompt("Give me the number 1")
    let ask_num2 = prompt("Give me the number 2")

    ask_num1 = Number(ask_num1)
    ask_num2 = Number(ask_num2)

    let operation_1 = ask_num1 + ask_num2
    console.log(operation_1) */

/*     console.log(".........................")

    let ask_num1 = prompt("Give me the number 1")
    let ask_num2 = prompt("Give me the number 2")

    ask_num1 = Number(ask_num1)
    ask_num2 = Number(ask_num2)

    let operation_1 = ask_num1>ask_num2

    console.log("El resultado es: "+operation_1) */

/*     let ask_letter1 = prompt("Give me the letter 1")
    let ask_letter2 = prompt("Give me the letter 2")

 */

/*     if (ask_letter1 > ask_letter2){

        console.log("El resultado es: " + ask_letter1 + " Es mayor que " + ask_letter2)
    }else{
        console.log("El resultado es: " + ask_letter1 + " Es menor que " + ask_letter2)
    }
 */


// 3 metodos para interactuar con el usuario //


//alert("Esto es un mensaje para los koders")//

//let name = prompt("Ingresa tu nombre")
//console.log(name)

// Operadores

//let operation = 5+5
//console.log(operation)

// Aritmeticos

//console.log(4-2)

//let string1 = "a"
//let string2 = "b"
//console.log(string1 < string2)
 //console.log(".........................")
//console.log(4==4)
//console.log(".........................")
//let number1 = 1
//number1  +=10

// Operadores

// Operadores
//console.log(".........................")

console.log(".........................")

//Pedir al usuario los siguientes datos a un usuario (nombre, peso actual en kg): Calcular el peso que tendria esa persona en la luna en Imprimirlo en consola// 

let ask_name = prompt("Give me your name")
let ask_weight = prompt("How much you weight?")
const earth_gravity = 9.8 
const moon_gravity = 1.622
const jupiter_gravity = 24.79
const uranus_gravity = 8.69
const venus_gravity = 8.87
const mars_gravity = 3.711

ask_weight = Number(ask_weight)

let operation_WeightAtMoon = (ask_weight/earth_gravity) * moon_gravity
let operation_WeightAtVenus = (ask_weight/earth_gravity) * venus_gravity
let operation_WeightAtUranus = (ask_weight/earth_gravity) * uranus_gravity
let operation_WeightAtMars = (ask_weight/earth_gravity) * mars_gravity



console.log(ask_name + ", your weight in the moon is " + operation_WeightAtMoon + " at Venus " + operation_WeightAtVenus + " in Uranus " + operation_WeightAtUranus + " in Mars " + operation_WeightAtMars)