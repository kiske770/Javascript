const misDatos = {
    name:'Mario',
    surname:'Avendaño',
    age: 37,
    height: 1.77,
    isDeveloiper: true 
}

const edad =  misDatos.age
console.log(edad)

const list = { ...misDatos}
console.log(list)

const listaAmigos = [
    {
        name:'Mario',
        surname:'Fonseca',
        age: 38,
        height: 1.73,
        isDeveloiper: false 
    },
    {
        name:'Andres',
        surname:'Sanchez',
        age: 40,
        height: 1.75,
        isDeveloiper: false 
    }
]

const allData = listaAmigos.concat(misDatos)
console.log(allData)
const nuevaLista = allData.sort((a,b) => b.age - a.age)
console.log(nuevaLista)