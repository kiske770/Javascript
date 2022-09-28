  const boton = document.querySelector("#btn")
  const botonInfo = document.querySelector("#btn-info")
  //console.log(boton)

  boton.addEventListener("click", () => {

        confirm("Estas de acuerdo?") ?
        alert("I agree..") :
        alert("Disagree...")
  })

  botonInfo.addEventListener("click", () => {
    const nombre = prompt("cual es tu nombre?")
    if (nombre) {
        console.log(`Tu nombre es ${nombre}`)
    }else{
        console.log('no hay info')
    }
})

let lista =[{
    nombre: "Mario",
    edad: 37
},
{
    nombre: "Carolina",
    edad: 38
},
{
    nombre: "Leonor",
    edad: 72
}]

console.log(lista)
console.table(lista) 