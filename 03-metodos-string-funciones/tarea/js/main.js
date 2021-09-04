// Ejercicio 3

/* let user_name = prompt("Please give me your name")
let string_lenght = user_name.length
console.log("The name lenght is " + string_lenght) */

// Ejercicio 4 


let text = "Cada estudiante tiene su ritmo, cada estudiante tiene su talento, y cada estudiante complementa al estudiante que tiene a su lado"
let count = text.match(/estudiante/gi).length
console.log("The word count is for word estudiante is " + count)
let replace = text.replace (/estudiante/gi , "koder")
console.log(replace)


// Ejercicio 5

function evaluarSiEsMayor(str_1,str_2){
    let resultado = str_1.length > str_2.length ? "El primero es mayor" : "El segundo es mayor"
    return resultado
}
let resultadoNuevo = evaluarSiEsMayor("Esta es una prueba nooo nono no no","No creo que sea facil yo creo que ahora si puedo hacer este un poco mas largito")
console.log(resultadoNuevo)

// Ejercicio 6

let str_split = ("Programacion javascript")
let split_action = str_split.split(" ")

function evaluarSplit(split_action){
    let resultadoSplit = split_action[0].length > split_action[1] ? "La primera es mayot" : "La segunda es mayor"
}
console.log(split_action[0])

