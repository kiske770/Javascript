//Trabajando con objetos
const objeto = {
    name: 'Mario',
    surname: 'Avendano',
    isDeveloper: true,
    favoriteBooks : ['Discurso del metodo','El codigo Davinci','El principito'],
    '4-iterations': [1, 2, 3, 4]
}

console.log(objeto.name)
console.log(objeto["4-iterations"])

const prop = "isDeveloper"
console.log(objeto[prop])

/*====================================   IMPORTANT ===== TO KEEP IN MIND ======================================================================*/

//Sample 1 
const objeto2 = objeto//copia valor y referencia
console.log(objeto2.name)

objeto2.name = 'Carolina'//CAmbio nombre en objeto2
console.log(objeto2.name)
console.log(objeto.name) //afecta el objeto original

//Sample 2 - evitar el copiado de referencia entre objetos
//por efecto de propagacion

const objeto3 = { ...objeto} // con esta declaracion solo copia los valores mas no la referencia del objeto
console.log(objeto.name)
console.log(objeto3.name)

//realizo cambio de valor enel objeto3
objeto3.name = 'Leonor'

console.log(objeto.name)
console.log(objeto3.name) //Solo copia el valor


/*==== Como ordenar listas de objetos en fucion de una propiedad ===== */

const listaPeliculas = [
   {titulo: 'Lo que el viento se llevo', anyo: 1939},
   {titulo: 'Titanic', anyo: 1997},
   {titulo: 'Moana', anyo: 2016},
   {titulo: 'El efecto mariposa', anyo: 2004},
   {titulo: 'Ted', anyo: 2012},
]

console.log(listaPeliculas)
// .sort() -> MUTA EL VALOR DE LA LISTA ORIGINAL

listaPeliculas.sort((a,b)=> a.anyo - b.anyo)
console.log(listaPeliculas)
