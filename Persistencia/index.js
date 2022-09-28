 localStorage.setItem("nombre","Mario")
 localStorage.setItem("nombre","Carolina")





localStorage.setItem("persona", JSON.stringify({
    nombre: "Miguel",
    edad: 35
}))


// console.log(JSON.parse(localStorage.getItem("persona")))
// console.log(localStorage.getItem("nombre"))

//JSON.stringify  -> Convierte un objeto o array en string
//JSON.parse -> Convierte un objeto o array deserializado en un objeto serializado 


localStorage.removeItem("nombre")


sessionStorage.setItem("tempNombre", "Mario")

/*Cookies*/
console.log(document.cookie)
document.cookie = "nombre-cookie=Mario"
document.cookie = "nombre-caducidad=Nombre;expires=" + new Date(2022,11,22).toUTCString()

console.log(document.cookie)