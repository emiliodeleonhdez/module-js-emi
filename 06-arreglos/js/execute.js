let logitudIndicada = prompt("Dame la longitud")
let convertNumber = Number(logitudIndicada)
let array = []

for (let i=0; i<convertNumber.length; i++){
    array.push(createSomeObject())
}

console.log(array)