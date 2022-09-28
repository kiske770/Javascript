//Carga y sobrecarga de funciones
function Grettings(){
    Hola()
}

function Hola(){
    console.log('Hola, soy la funcion Hola()')
}

Grettings()

//1. global() - ejecuta el codigo de arriba abajo. Carga la memoria con lass funciones definidas
//2. Grettings()  global()
//3. Hola() Grettings()  global()
//4.  Grettings()  global()
//5. global()
