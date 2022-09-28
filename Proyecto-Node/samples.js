//Listas, arryas o arreglos
const lista1 = [1, "hola", true, null, undefined];
const lista2 = new Array(1, "hola", true, null, undefined);
const lista3 = new Array(3);

const lista4 = [lista1,lista2,lista3];


lista3[0]= "soy el primer item de la lista";

console.log(lista1);
console.log(lista2);
console.log(lista3);
console.log(lista4);


//Objetos

const movil1 = {
    altura: 10,
    anchura: 5,
    marca: "xiaomi",
    isWhile: false,
    contactos: ["Caro","Madre","Ivonne","Trabajo"],
    tarjeta: {
        marca: "Sandix",
        almacenamiento: 32
    },
    "altura-tarjeta": 4
}


if (!movil1.isWhile &&  movil1.tarjeta.almacenamiento>=32){
    console.log(movil1.altura);
    let alturaTarjeta = movil1["altura-tarjeta"];
    console.log(alturaTarjeta);
}
else{
    console.log(movil1.anchura);
}


//Fechas -Dates
//Librerias de apoyo: Moment.js
const ahora = new Date();
console.log(ahora);

const fecha_milis = new Date(10); //Utilizando los milisegundos 
console.log(fecha_milis);

const fecha_cadena = new Date("December 22 2020"); //Utilizando un formato
console.log(fecha_cadena);

const fecha_valores = new Date(2020,6,2); //Utilizando un formato
console.log(fecha_valores); //el mes empieza en cero' 0= january


const dia = ahora.getDate();
const mes = ahora.getMonth();
const ano = ahora.getFullYear();


console.log(dia);
console.log(mes);
console.log(ano);
