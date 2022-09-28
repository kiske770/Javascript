const button = document.querySelector("#btn-button-event")
console.log(button)

button.addEventListener("click", () => {
    alert("click en el boton!")
})


$("#btn-button-event-jquery").click(() => {
    alert("Hola, estoy utilizando jQuery!")
})