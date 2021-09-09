let arrayKoders = [
    "Paco",
    "Clau",
    "Fanny",
    "Nancy",
    "Pablo"

]

for (let i=0; i<arrayKoders.length; i++){
    console.log(`hola mi nombre es ${arrayKoders[i]}`)
} 

arrayKoders.push("Emi", "clau", "Fany")
console.log(arrayKoders)


arrayKoders.pop() //Elimina el ultimo item
console.log(arrayKoders)

arrayKoders.shift()//Te quita el primer elemento y te lo regresa 
console.log(arrayKoders) 

arrayKoders.unshift() // Agrega al principio del array 
console.log(arrayKoders)


let arrayKoders10ma =["cin", "Juanpi", "Vero"]
let arrayAllKoders =  arrayKoders.concat(arrayKoders10ma)
console.log(arrayAllKoders)

arrayAllKoders.splice(2,2)
console.log(arrayAllKoders)

arrayAllKoders.splice(2,0,"Vic")
console.log(arrayAllKoders)

arrayKoders.unshift("Hiram") // Agrega al principio del array 
console.log(arrayKoders)
