let alturaCm = 177;
let alturaMt = 1.77;

let peso = 102.5;

let roundAlturaUp =  Math.ceil(alturaMt);
let roundPesoDown = Math.floor(peso);

console.log(roundAlturaUp);
console.log(alturaMt.toPrecision(2));
console.log(roundPesoDown);

console.log(peso.toPrecision(3));

let max =  Number.MAX_VALUE;
let maxAddUno = max + 1;

console.log(typeof(max));
console.log(typeof(maxAddUno));

console.log(max);
console.log(maxAddUno);

if (max === maxAddUno ){
    console.log(`el valor max ${max} es igual a max + uno ${maxAddUno}`);
}
else{
    console.log(`el valor max ${max}  no es igual a max + uno ${maxAddUno}`);
}