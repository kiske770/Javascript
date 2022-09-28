import  { Suma, Multiplica, Potencia, Factorial } from './modulos/matematicas.js'
//import * as moduloMatematicas from './modulos/matematicas.js'  - Importa todos los modulos
import getAutor, { libro } from './modulos/literatura.js'


const sum = Suma (4,12)
console.log(sum)

const aut = getAutor()
console.log(aut)

console.log(libro)