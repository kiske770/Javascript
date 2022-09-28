//Trabajando con listas - arrays - vectores - arreglos
let array1 =  new Array();
let array2 =  [1, 2, 3, 4, 5];
let array3 =  [1, 'hola', true, null, undefined];

console.log(array3);

//Acceder a los valores por su posicion
let item1 = array3[0];
console.log(item1);
console.log(array3[1]);
console.log(array3[2]);

//Metodos poara introducir nuevos valores en nuestros arrays
//.push() - .unshift() => mutan el valor del array

array3.push('final'); //valores al final -> push
array3.push('3.14', false, 123); //valores al final -> push
console.log(array3);

array2.unshift('inicio');//valores al inicio -> unshift
array2.unshift(9, 8, 7);//valores al inicio -> unshift
console.log(array2);


//Metodos para eliminar items en nuestros arrays
//.pop() - .shift() +> mutan el valor del array
let array4 = [1, 3, 5, 7, 9]
array4.pop(); //valores al final -> pop
console.log(array4);

array4.shift(); //valores al final -> pop
console.log(array4);


//Metodo para modificar -anadir - eliminar 
let array5 = [1, 2, 3, 4, 5, 6, 7];

//eliminar valores
array5.splice(2, 1); //(posicion a eliminar, numero de items a eliminar)
console.log(array5);


//adanir valores
array5.splice(2,0,'hola mundo');//(posicion a insertar, 0,  numero de items a ingresar separados por comas)
console.log(array5);


//Modificar valores
array5.splice(2,1,3);//(posicion a mnodificar, 1,  numero de items a medificar separados por comas)
console.log(array5);

//unir dos listas .concat(lista)
const lista1 =['hola', 2,false, null];
const lista2 =['adios', 8, true, undefined];

console.log(lista1.concat(lista2));
const lista3 = lista1.concat(lista2);
console.log(lista3);

//como unir dos listas con el factor de propagacion
console.log(...lista3);
const lista4 = [...lista1, ...lista2];
console.log(lista4);

//Obtener una lista a apartir de otra
// .slice()

const array6 = ['hola', 1, 2, 3, true, null, 'adios'];
console.log(array6.slice(4));
console.log(array6.slice(1,4));

const array7 = array6.slice(1,4); 
console.log(array7);

const array8 = [[1, 2]]
const array9 = [[2, 1]]

let newArray = array8.concat(array9)
console.log(newArray)

newArray =  array8.push(array9)
console.log(newArray)