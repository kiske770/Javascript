//Functiones tipo flecha y anonimas
//Flecha

const array = [1,5,3,9,7,2,8,6,4]
const array2 = array.map((value) => value * 2)  //anonimas: que no se define sino que se introducen en una sentencia

console.log(array2)

//Option 2
const doubleValue = value => {
    return value *2
}
console.log(doubleValue(6))

//Option 3
const dobleValor = valor => valor * 2
console.log(dobleValor(9))

