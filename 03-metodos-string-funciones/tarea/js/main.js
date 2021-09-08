// Ejercicio 3

/* let user_name = prompt("Please give me your name")
let string_lenght = user_name.length
console.log("The name lenght is " + string_lenght) */

// Ejercicio 4 

/* 
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
 */
// Ejercicio 6

/* let str_split = ("Programacion javascript")
let split_action = str_split.split(" ")

function evaluarSplit(split_action){
    let resultadoSplit = split_action[0].length > split_action[1].length ? split_action[0] : split_action[1]
    return resultadoSplit
}
console.log(evaluarSplit(split_action))
 */


/*
    Crear una funcion que permita al usuario retornar el numero de coincidencias de 
    una palabra en una frase que el mismo usuario ingrese.
    input:
    palabra a buscar: 'Hola'
    frase: 'Hola me llamo Fernanda Palacios. Hola Otra vez'
    
    OutPut: 'El n�mero de coincidenciad de ${palabra a buscar} es de 2 veces :D'
*/

//primero dame la palabra a buscar

let palabraABuscar = "ipsum"

// despues dame la frase

let fraseDelUsuario = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras interdum tincidunt est eu accumsan. Pellentesque ex est, aliquam in tincidunt vel, tempus sed lacus. Proin vestibulum ullamcorper posuere. Duis sit amet varius enim, eu consequat mi. Maecenas sit amet nibh ut nisi mollis ultricies. Fusce justo mauris, fermentum in feugiat nec, sagittis ac nisi. Vestibulum eu ipsum nulla. Proin vulputate, turpis vitae condimentum vestibulum, ligula neque finibus leo, a imperdiet."

function retornoCoincidencias(palabraABuscar){
    let buscarPalabraUsuario = fraseDelUsuario.match(/ipsum/gi)
    return buscarPalabraUsuario
}
console.log(retornoCoincidencias(palabraABuscar).length)