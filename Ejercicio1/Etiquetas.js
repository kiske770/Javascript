//Labels - etiquetas
let decenas = 0;
let unidades = 0;

bucleDecenas: while (decenas <=9 ) {
  bucleUnidades: while (unidades <= 9) {
    console.log(`El numero actual es ${decenas} ${unidades}`);
    unidades++;
    if(unidades === 10){
      unidades = 0;
      break; bucleUnidades
    }
    if (decenas === 2){
      console.log(`El numero actual es ${decenas} ${unidades}`);
      break; bucleDecenas
    }
  }
  decenas++;
}