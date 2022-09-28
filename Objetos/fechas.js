//Fechas en javascriprt

const fecha = new Date() //option 1
console.log(fecha)

const fecha2 =  new Date(1984,11,22,3,27,15,192)//option 2
console.log(fecha2)

const fecha3 =  new Date(0)//option 3
console.log(fecha3)

const fecha4 =  new Date('December 22, 1984 03:27:15')//option 4
console.log(fecha4)

//comparacion de fechas
console.log(fecha > fecha2)
console.log(fecha < fecha2)


const fecha5 =  new Date(1984,11,22,3,27,15,192)

console.log(fecha2 === fecha5) // ERROR - No se puyede comparar fechas de esta manera
console.log(fecha2.getTime() === fecha5.getTime()) //Esta es la forma de comparar fechas - convirtiendo a milisegundos

///obtener Dia, mes, año

console.log(fecha2.getDate()) //obtener dia
console.log(fecha2.getMonth() + 1 ) //obtener mes
console.log(fecha2.getFullYear() ) //obtener año

//Mostrar fecha como string
console.log(fecha2)
// url para dar formato a fechas - cultura
console.log(fecha2.toLocaleDateString('es-CO'))
console.log(fecha2.toLocaleDateString('en-US'))
