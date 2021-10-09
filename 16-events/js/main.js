let kodersArray = []

let btnAgregar = document.getElementById("btn-agregar")

btnAgregar.addEventListener("click", () =>{
    let objectKoders = {}
    let koderName = document.getElementById("koder-name").value
    let koderLastName = document.getElementById("koder-lastName").value
    objectKoders.name=koderName
    objectKoders.lastName=koderLastName
    kodersArray.push(objectKoders)
    console.log(kodersArray)
})
