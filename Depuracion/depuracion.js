const persona = {
    nombre: "Mario",
    edad: 37
}

console.log(persona)

function ObtenerDobleEdad(edad){
    return edad * 2
}

const dobleEdad = ObtenerDobleEdad(persona.edad)
console.log(dobleEdad)

let arrayNums = []
for (let i = 0; i<= 20; i++){
    const numero = persona.edad + i
    console.log(numero)
    arrayNums = [...arrayNums, numero]
}