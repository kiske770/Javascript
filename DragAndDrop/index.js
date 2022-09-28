const parrafos = document.querySelectorAll(".parrafo")
const secciones = document.querySelectorAll(".seccion")
const seccionRecycle = document.querySelectorAll(".recycle-seccion")
const recycle = document.querySelector(".recycle-bin")
console.log(seccionRecycle)


parrafos.forEach(parrafo => {
    parrafo.addEventListener("dragstart",  event => {
        //console.log(`Estoy arrestrando el parrafo: ${parrafo.innerText}`)
        parrafo.classList.add("dragging")
        event.dataTransfer.setData("id", parrafo.id)
        const ghost = document.querySelector(".image-Ghost")
        event.dataTransfer.setDragImage(ghost,0,0)
    })

    parrafo.addEventListener("dragend", () => {
        //console.log(`Fin de arrastre del parrafo: ${parrafo.innerText}`)
        parrafo.classList.remove("dragging")
    })
})

secciones.forEach (seccion => {
    seccion.addEventListener("dragover", event => {
        event.preventDefault()
        console.log("Drag Over")
    })

    seccion.addEventListener("drop", event => {
        const parrafoId = event.dataTransfer.getData("id")
        //console.log(`Parrafo Id: ${parrafoId}`)
        const parrafo = document.getElementById(parrafoId)
        seccion.appendChild(parrafo)
    })
})

seccionRecycle.forEach(basura => {
    
    basura.addEventListener("dragover", () => {
        event.preventDefault()
        console.log("Drag Basura")
    })
    
    basura.addEventListener("drop", event =>{
        const parrafoId = event.dataTransfer.getData("id")
        const parrafo = document.getElementById(parrafoId)
        basura.appendChild(parrafo)
        basura.removeChild(parrafo)
    })
})