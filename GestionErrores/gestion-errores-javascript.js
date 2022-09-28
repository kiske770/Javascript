//Gestion Errores JS

const miFunction = val => {
    if (typeof val === 'number'){
        return val * 2
    }
    else{
        throw new Error(`El valor ${val} debe ser de tipo numerico`)
    }
    
}

console.log(miFunction(42))
let numero = "8";

try{
    console.log('El codigo se esta ejecutando')
    const result = miFunction(numero)
    console.log(result)
}
catch(ex){
    console.error(`${ex}`)
    //console.log(`ERROR:`)
}
finally{
    console.log('Esto se ejecuta independientemente si el codigo falla o no')
}

//InternalError, SntaxError, TypeError, RangeError, ReferenceError
//Referencia Errors Javascript http://developer.mozilla.org

