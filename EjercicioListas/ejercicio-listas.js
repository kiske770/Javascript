//Variable que contenga la lista de la compra (mínimo 5 elementos)
const listaCompras = [
    'Arroz',
    'Cereal',
    'Patatas',
    'Frijol',
    'Azucar',
    'Pimienta'
]

//Modifica la lista de la compra y añádele "Aceite de Girasol"
listaCompras.splice(6,0,'Aceite de Girasol')
console.log(listaCompras)

//Modificar la lista de la compra eliminando "Aceite de Girasol"
listaCompras.splice(6,1)
console.log(listaCompras)


//Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
const peliculas = [
    {titulo: 'Jurasic Park', director: 'Stiven Spilberg',  fecha: new Date('01/01/1900')}, 
    {titulo: 'Tjhe Conjurin', director: 'James Wan',  fecha: new Date('09/06/2013')}, 
    {titulo: 'Mar Adentro', director: 'Alejandro Almenabar',  fecha: new Date('02/11/2004')}, 
    {titulo: 'Braveheart', director: 'Mel Gibson',  fecha: new Date('08/08/1995')}, 
    {titulo: 'Jurasic Park', director: 'James Cameron',  fecha: new Date('04/04/1997')}, 
]

//Nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
const peliculasAfter2010 = peliculas.filter(p=> {
    if (p.fecha.getFullYear() >= 2010 && p.fecha.getMonth()>= 0 && p.fecha.getDate()>= 1) 
    return p
})

console.log(peliculasAfter2010)

//Nueva lista que contenga los directores de la lista de películas original (utilizando map)
const peliculasDirectores = peliculas.map((director)=> 
    `${director.director}`
)
console.log(peliculasDirectores)

//Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
const peliculasTitulo = peliculas.map((titulo)=> 
    `${titulo.titulo}`
)
console.log(peliculasTitulo)

//Nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
const listaUnificada = peliculasDirectores.concat(peliculasTitulo)
console.log(listaUnificada)


//nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
const listaPropagacion = [...peliculasDirectores, ...peliculasTitulo]
console.log(listaPropagacion)