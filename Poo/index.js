const Persona ={
    Name: 'Mario',
    Age: 37,
    isDeveoper: true,
    Gretting: function(){
        console.log('Hello World!.')
    }
}

console.log(Persona)
Persona.Gretting()

const OtherPersona ={
    Name: 'Miguel',
    Age: 23,
    isDeveoper: false,
    Gretting: function(){
        console.log('Hola Mundo!.')
    }
}

console.log(OtherPersona)
Persona.Gretting()

//function tipo flecha
const CreatePerson = (name, age, isDeveoper) => {
    return {
        Name:name,
        Age: age,
        isDeveoper: isDeveoper,
        Gretting: function(){
            console.log('Hola')
        }
    }
}

const NuevaPersona = CreatePerson('Juan', 29, false)
console.log(NuevaPersona)

const NuevaPersona2 = CreatePerson('Maria', 17, true)
console.log(NuevaPersona2)



