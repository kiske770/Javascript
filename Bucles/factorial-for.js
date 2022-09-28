//Bucle For
let numero = 10;
console.log (`Calculando el factorial de ${numero}`);

if (typeof numero == "number") {
  let result = numero;
  for (let i = numero - 1; i >= 1; i--) {
    result = result * i;
  }

    console.log(result);

} else {
    console.log("El valor de la variable debe ser de tipo numerico");
}