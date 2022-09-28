//Ejercicio Cadenas

let nombre ="Mario";
let apellido = "Avendaño";

let estudiante = `${nombre} ${apellido}`;
let estudianteMayus =  estudiante.toUpperCase();
let estudianteMinus =  estudiante.toLocaleLowerCase();

let longEstudiante = estudiante.length;
let primeraLetra = nombre.charAt(0);
let ultimaLetra = apellido.charAt(apellido.length - 1);
let trimEstudiante = estudiante.trim();

console.log(nombre);
console.log(apellido);
console.log(estudiante);
console.log(estudianteMayus);
console.log(estudianteMinus);
console.log(longEstudiante);
console.log(primeraLetra);
console.log(ultimaLetra);
console.log(trimEstudiante);


let isNombre = estudiante.includes(nombre);
console.log(isNombre);
if (isNombre){
    console.log("existe");
}
else{
    console.log("no existe");
}
