//Gestion de Logs

function CalculateDivision (x, y){
    if (typeof x !== 'number'){
        throw new Error(`The value ${x} must be numeric.`)
    }

    if(typeof y !== 'number'){
        throw new Error(`The value ${y} must be numeric.`)
    } 

    if (y === 0){
        throw new Error('Error: you can\'t divide by zero!\'')    
    }

    return x / y
}


const logger = require('./logger')

try{
    logger.info('Starting....')
    const result = CalculateDivision(9,0)
    logger.info(`The result is: ${result}`)
}
catch(ex){
    logger.error(`An exception has ocurred: ${ex}`)
}
