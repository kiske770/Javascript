//metodo .some()
const array = [3,7,8,2,6,5,1,3,4,9,8,5,2,-10,-5,3,-4,-7];

const result = array.some(value => value < 0);

console.log(result)

const listObjetos =[
    {nombre: 'Mario', edad: 37},
    {nombre: 'Carolina', edad: 38},
    {nombre: 'Leonor', edad: 72},
    {nombre: 'Padre', edad: 69},
    {nombre: 'Samuel', edad: 8}
];

const existeMario =  listObjetos.some(persona => persona.nombre === 'Mario')
console.log(existeMario)

//como obtener un a lista a partir de un objeto iterable
const cadena = 'Hola, soy Mario'
console.log(cadena[6])

const array_cadena = Array.from(cadena)
console.log(array_cadena)

const set= new Set([2,3,'Hola',4])
const ar_set = Array.from(set)

console.log(ar_set)

let array4 = [9,8,6,5,4,3,2,1]
const keys = array4.keys()
console.log(keys)

const ar_keys = Array.from(keys)
console.log(ar_keys)
