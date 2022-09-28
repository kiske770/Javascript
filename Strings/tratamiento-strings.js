//Metodos comunes para strings

//Longitud

let str = "hola, soy una cadena - string";
console.log(str.length);

//extraer partes de cadenas
//slice() substring() substr()

let slice_str = str.slice(3,17);
console.log(slice_str)

let substring_str = str.substring(3,17);
console.log(slice_str)

let substr_str = str.substr(3, 17);
console.log(substr_str)

//Reemplazar parte de un contenido

let cadena = "Hola, mi nombre es Gojira";
let text_replace = cadena.replace('Gojira', 'Masterplan');

console.log(cadena);
console.log(text_replace);

let expReg = /a/g;
let texto_largo = 'Mambrú se fue a la guerra, qué dolor, qué dolor, qué pena, Mambrú se fue a la guerra, no sé cuándo vendrá. Do-re-mi, do-re-fa, no sé cuándo vendrá.';
console.log(texto_largo.replace("a", "@")); //solo reemplaza la primera coincidencia
console.log(texto_largo.replace(expReg, "@")); //uso de expresiones regulares

let mayusculas = "esto es una prueba".toUpperCase();
console.log(mayusculas);

let minusculas = "ESTO ES UNA PRUEBA".toLowerCase();
console.log(minusculas);

let str_camel = "inTENTemos hacER UNa prUEBA.";

//Eliminar espacios
let str_espacios = " tiene muchos espacios ";
console.log(str_espacios.length);
console.log(str_espacios.trim().length);

//Obtener el caracter que hay en cierta posicion
console.log(str_camel.charAt(4));

let str_Posicion = "Hola, soy paquito y me gusta la banda de paquito";
console.log(str_Posicion.indexOf("paquito"));
console.log(str_Posicion.charAt(10));
console.log(str_Posicion.lastIndexOf("paquito"));


//Expresiones regulares
//https://regexr.com

console.log(texto_largo.match(/no/g));

//Existe la palabra dentro del texto
console.log(texto_largo.includes("pena"));

console.log(texto_largo.startsWith("Mam"));
console.log(texto_largo.endsWith("vendrá."));





