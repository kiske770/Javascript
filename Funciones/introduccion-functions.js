//Funciones
const nameName ='Mario'
Saludar(nameName)

function Saludar(nombre){
    console.log(`Hola ${nombre}`)
}

/*=================================================================================*/

Despedir(nameName)

function Despedir (nombre){
    console.log(`Adios ${nombre}`)
}

/*=================================================================================*/

let persona = { name: 'Miguel', surname: 'Pinto'}

Saludar(persona)

function Saludar(objeto){
    console.log(` hola ${objeto.name}  ${objeto.surname}`)
}

/////////////////////////////////////////////////


function PrintNumber(number){
    console.log(number)
}


function PrintNumberDefault(number= 2){ //parametros por defecto
    console.log(number)
}


PrintNumber(7)
PrintNumberDefault()

/* por factor de propagacion*/
function print(...parameters){
    console.log(parameters)
}

print(1,2,6,8,true,'hola', null, undefined)

/*Sumar los valores en una function*/
function Sum(...numbers){
    return numbers.reduce((x,y)=> x + y)
}

const s = Sum(1,2,3,4,5,6,7)
console.log(s)


/*Multiplicar*/
function multiplica (x =0, y = 0){
    return x * y
}

const p = multiplica(8,4)
console.log(p)


