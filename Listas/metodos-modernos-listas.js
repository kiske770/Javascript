//Metodos de iteraccion con listas
const array =  ['hola', 1, 2, 'm', false, undefined];

//forma antigua y poco eficiente
for (let index = 0; index < array.length; index++) {
    console.log(array[index]);
}

//forma eficiente en ES6 
array.forEach(v=> {
    console.log(v);
})

//busqueda de un valor dentro de una lista .find()
array.find(f=> {
    if (f === 2){
        console.log('cumple');
        return true;
    }
})

const listObjetos =[
    {nombre: 'Mario', edad: 37},
    {nombre: 'Carolina', edad: 38},
    {nombre: 'Leonor', edad: 72},
    {nombre: 'Padre', edad: 69},
    {nombre: 'Samuel', edad: 8}
];

//option 1
const objeto = listObjetos.find(b => {
    if (b.nombre === 'Leonor'){
        return b.edad;
    }
});
console.log(objeto.edad);

//option 2
const objeto2 = listObjetos.find(b => {
        return b.nombre === 'Padre'
    }
);
console.log(objeto2.edad);

//option3
const objeto3 = listObjetos.find(b => b.nombre === 'Carolina');
console.log(objeto3.edad);


//option 4 
const { edad } =  listObjetos.find(b => b.nombre === 'Samuel');
console.log(edad);