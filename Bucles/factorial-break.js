//Bucle While with break
let numero = 10;
console.log (`Calculando el factorial de ${numero}`);

if (typeof(numero) == "number"){
let result = numero;
let i= numero - 1;
while (i >=1){

    if (i ===1)
        break

    result = result * i;
    i--;
}

console.log(result);
}
else{
    console.log("El valor de la variable debe ser de tipo numerico");
}