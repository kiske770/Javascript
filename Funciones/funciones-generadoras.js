//Funciones Generadoras
function* GenerarId(){
    let id =0
    while(true){
        id++
        if(id===10){
            return id
        }
        yield id //envia un numero y se detiene en este punto. Esperando que se vuelva a llamar
    }
} 

const Gen = GenerarId();
console.log(Gen.next()) //para obtener un valor
console.log(Gen.next()) //para obtener un valor
console.log(Gen.next()) //para obtener un valor
console.log(Gen.next()) //para obtener un valor
console.log(Gen.next()) //para obtener un valor
console.log(Gen.next()) //para obtener un valor
console.log(Gen.next()) //para obtener un valor
console.log(Gen.next()) //para obtener un valor
console.log(Gen.next()) //para obtener un valor
console.log(Gen.next()) //para obtener un valor
