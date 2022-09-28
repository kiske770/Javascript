//formas de importar y exportar
// 1. CommonJS - require
const moduleMatematica = require('./funciones/matematicas.js')
//console.log(moduleMatematica)

const fact = moduleMatematica.Factorial(5)
console.log(fact)

const potencia = moduleMatematica.Potencia(5,2)
console.log(potencia)

// 2. Import ES6 - import
const { Factorial, Suma, Potencia, Multiplica } = require('./funciones/matematicas.js')

const suma = Suma(53,96)
console.log(suma)

const prod = Multiplica (20,56) 
console.log(prod)
