const f= document.getElementById('formulario')
console.log(f)

f.addEventListener("submit", (event) => {
    console.log(event)
    event.preventDefault() // evitar que se ejecute el comportamiento por defecto
})