//Operaciones arimeticas


let a = 3.5;
let b = 4.8;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);

//representacion de numeros en cadenas de texto
console.log(typeof a);
let a_s = a.toString();
console.log(a_s);
console.log(typeof a_s);

//Redondeo de numeros decimales
let p = 3.3;
let q = p * 3;

//.toFixed(x) - limitar el numero de decimales
console.log(p.toFixed(4)); // numero de deciamles

let  t = 1893.23658469;
let s = 221344596875231;
console.log(t.toFixed(2))

//toPrecision(x) -  realizar un redondeo - limita el numero de cifras significativas
console.log(t.toPrecision(8));
console.log(s.toPrecision(5)); //devuelve un string

//Obtener valores numeros a parte de literales
let aa = 2;
let bb = new Number(3);

console.log(aa);
console.log(bb);

console.log(aa + bb);
console.log(aa.valueOf() + bb.valueOf());
console.log(bb.valueOf());

//para los strings
let nuevo_string = new String("Hola, soy un nuevo string");
console.log(nuevo_string);
console.log(nuevo_string.valueOf());


// NaN - infinite
let n =  Number("adios");
console.log(n);
console.log(isNaN(n));

let numerador = 19;
let denominador = 0;

console.log(numerador / denominador);

//caso 2 
let denominador_dos = null;
console.log(numerador / denominador_dos);

//como convertir valores strings a numericos
let numero= '5.89';
console.log(typeof(numero));
let cc = Number(numero)
console.log(typeof(cc));

//ParseInt - ParseFloat
console.log(parseInt(numero));
console.log(parseFloat(numero));


console.log(parseFloat(numerador));

//Numeros hexadeciamles - (base 16)
let numHex = '0x3a5b7';
let numOct = '75321'
let numBin = '101011'
console.log(parseInt(numHex ,16)); //base 16
console.log(parseInt(numHex)); //base 10
console.log(parseInt(numOct ,8)); //base 8
console.log(parseInt(numBin, 2));


let epsilon = Number.EPSILON;
console.log(epsilon);
//como invertir los string a numericos 
//Obtener los maximos y los minimos en Javascript


