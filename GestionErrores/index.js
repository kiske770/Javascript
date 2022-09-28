//
console.log('Hola')
console.info('Hola, este es un mensaje informativo')
console.warn('Hola, este es un mensaje de advertencia')
console.debug('Hola, este es un mensaje de depuracion')
console.error('Hola, este es un mensaje de error')

//with npm winston
const logger = require('./logger')



logger.info('Hola, este es un mensaje informativo')
logger.warn('Hola, este es un mensaje de advertencia')
logger.debug('Hola, este es un mensaje de depuracion')
logger.error('Hola, este es un mensaje de error')