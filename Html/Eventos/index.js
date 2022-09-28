const hTexto =  document.getElementById("h-texto")
console.log(hTexto)

hTexto.addEventListener("cambioTexto", event => {
    console.log(event.detail)
    hTexto.innerText = event.detail.texto
    hTexto.style.color = event.detail.color
})

function cambiarTexto (newText, color){
    const newEvent =  new CustomEvent("cambioTexto", {
        detail:{
            texto: newText,
            color:_color
        }
    })

    hTexto.dispatchEvent(newEvent)
}