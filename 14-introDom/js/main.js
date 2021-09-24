/*  let h1 = document.createElement("h1")
console.log(h1)
let text = document.createTextNode("hola mundo")

h1.appendChild(text)
document.body.appendChild(text)


let names = [
    "Elias",
    "Pao",
    "Nan",
    "Adolfo"

] */

let rowTabla = document.createElement("tr")
document.body.appendChild(rowTabla)

let headerTabla = document.createElement("th")
document.body.appendChild(headerTabla)

let columnaName = document.createTextNode("name")

headerTabla.appendChild(columnaName)

document.body.appendChild(headerTabla)


let ul = document.createElement("ul")

names 



 
let mentorsArray = [
    {
        name: "Angel Resendiz",
        scores: [
            {
                signature:  "HTML",
                score: 10
            },
            {
                signature:  "CSS",
                score: 10
            },
            {
                signature:  "JS",
                score: 9
            },
        ]
    },
    {
        name: "Elda Corona",
        scores: [
            {
                signature:  "HTML",
                score: 10
            },
            {
                signature:  "CSS",
                score: 9
            },
            {
                signature:  "JS",
                score: 10
            },
        ]
    },
    {
        name: "Alfred Altamirando",
        scores: [
            {
                signature:  "HTML",
                score: 9
            },
            {
                signature:  "CSS",
                score: 10
            },
            {
                signature:  "JS",
                score: 10
            },
        ]
    },
    {
        name: "Tux Tuxtla",
        scores: [
            {
                signature:  "HTML",
                score: 10
            },
            {
                signature:  "CSS",
                score: 8
            },
            {
                signature:  "JS",
                score: 10
            },
        ]
    },
    {
        name: "Fernanda Palacios",
        scores: [
            {
                signature:  "CSS",
                score: 9
            },
            {
                signature:  "JS",
                score: 10
            },
            {
                signature:  "HTML",
                score: 10
            },
        ]
    }
] 

mentorsArray.forEach((mentor)=>{
    let td = document.createElement("td")
    let {name} = mentor
    let text = document.createTextNode(name)
    td.appendChild(text)
    document.body.appendChild(td)
})


let table = document.createElement("table")
let tr = document.createElement("tr")
table.appendChild(tr)


document.body.appendChild(table)

mentorsArray.forEach((mentor)=>{
    let tr = document.createElement("tr")
    let td = document.createElement("td")
    let {name} = mentor
    let text = document.createTextNode(name)
    td.appendChild(text)
    document.body.appendChild(td)
})

