//Una función sin parámetros que devuelva siempre "true"
function AlwaysTrue(){
    return true
}
const result = AlwaysTrue()
console.log(result)


//Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado


 function Grettings(mean){
     console.log(`Hello, I am promise. ${mean}`)
 }

 setTimeout(function(){
    Grettings('async')
 }, 5000)


 Grettings('sync')


//Una función generadora de índices pares automáticos

function*  PairIndexes(){
    let id = 0
    while(id<30){
        id++
        if (id % 2 === 0){
            return id;
        }
        else{
             id++
        }
        yield id
    }      
}

const generaId = PairIndexes();
console.log(generaId.next())
console.log(generaId.next())
console.log(generaId.next())
console.log(generaId.next())
console.log(generaId.next())
console.log(generaId.next())
console.log(generaId.next())
console.log(generaId.next())
console.log(generaId.next())
console.log(generaId.next())
console.log(generaId.next())
console.log(generaId.next())
console.log(generaId.next())
console.log(generaId.next())
console.log(generaId.next())
console.log(generaId.next())







