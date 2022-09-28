//Funciones asincronas

function MyAsync(){
    //hace una llamada a una base de datos externa

}


//Promesas  - Promises
const MyPromise = new Promise((resolve, reject) => { //resolve y reject se puede nombre como se desee, siempre y cuando se mantenga el orden

    const i = Math.floor(Math.random() * 2)
    //If everything it's OK
    if(i !== 0){
        resolve()
    }
    else{
        reject()
    }

})

MyPromise
    .then(()=> console.log('execution successfull'))
    .catch(()=> console.log('Error'))
    .finally(()=> console.log('I always execute me'))

    //async await
    