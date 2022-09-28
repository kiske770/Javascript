let nombre = "Mario"
let apellido = "Avendaño"

const persona = {
    nombre: nombre,
    apellido: apellido
}

//session
console.log(sessionStorage.setItem("nombre", nombre))
console.log(sessionStorage.setItem("apellido", apellido))

//local
console.log(localStorage.setItem("nombre", nombre))
console.log(localStorage.setItem("apellido", apellido))

//object
console.log(sessionStorage.setItem("persona", JSON.stringify(persona)))
console.log(localStorage.setItem("persona", JSON.stringify(persona)))

//cookie
const fecha = new Date()
const mins = fecha.getMinutes()
fecha.setMinutes(mins + 2)

document.cookie = "nombre=" + nombre  
document.cookie = "apellido=" + apellido  
document.cookie = "persona=" + JSON.stringify(persona) + ";expires=" +  fecha.toUTCString()

console.log(document.cookie)
