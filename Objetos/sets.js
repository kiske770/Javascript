//Sets o conjuntos
//sample 1
const array = [1, 2, 3, 4, 5, 1, 3, 5, 2, 4]
const mySet = new Set(array) 

console.log(array)
console.log(mySet)
//sets, conjunto no ordernado de elementos unicos

//sample 2
const array2 = [1, 2, 3, 4, 5, {id: 1 }, true, {id: 1}]
const mySet2 = new Set(array2) 


console.log(array2)
console.log(mySet2)
console.log({ id: 1 } === { id: 1 }) //a pesar que se ven iguales, tecnicamente no es el mismo objeto

//adicionar
mySet.add(9)
console.log(mySet)
mySet.add(1)
console.log(mySet)

//eliminar
mySet2.delete(3)
console.log(mySet2)
mySet2.clear() //elimina todo
console.log(mySet2)

//Si contiene un valor
console.log(mySet.has(2))

//Indagar sobre el tamaño
console.log(mySet.size)

mySet.forEach(value=> {console.log(value)})


//iterable
const it_set = mySet.values()
console.log(it_set)

//convertir set en array
const ar_mySet = [...mySet]
console.log(ar_mySet)


