/*
- Obtener el score promedio de cada materia (HTML, CSS, JS)
- Obtener el promedio indivual de cada mentor
- Crear un array de string con la siguiente forma:
  "Mi nombre es {name} y mi promedio es {promedio}"
- Obtener la lista de mentores cuyo promedio sea mayor a 9.5
*/

let mentorArray = [
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
    }
]



/* console.log(mentorArray[0].scores[0].score) */

console.log("La longitud de metonArray es " + mentorArray.length)



for (let i=0; mentorArray.length; i++){
    console.log("Esto es i " + i)
    console.log(mentorArray[i].scores[i].score)
}