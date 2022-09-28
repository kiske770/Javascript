//Ordenamiento de listas
//.sort()
const array = [2,6,8,7,3,1,4,0,9,8];
console.log(array.sort((a,b)=> {
    if (a < b){
        return -1;
    }
    else if (a > b){
        return + 1;
    }
    else{
        return 0;
    }
}))

console.log(array);

//option 2 - array numericos
const array2 = [8,5,3,6,9,2,1,4,5,7,8,12];
array2.sort((a,b)=> a-b);
console.log(array2);

array2.sort((a,b)=> b-a);
console.log(array2);

//ordernar edades
const listObjetos =[
    {nombre: 'Mario', edad: 37},
    {nombre: 'Carolina', edad: 38},
    {nombre: 'Leonor', edad: 72},
    {nombre: 'Padre', edad: 69},
    {nombre: 'Samuel', edad: 8}
];

//option 1 -asc
listObjetos.sort((a,b)=> {
    if (a.edad< b.edad){
        return -1;
    }
    else if (a.edad > b.edad){
        return + 1;
    }
    else{
        return 0;
    }
})
console.log(listObjetos);

//option 2 -desc
listObjetos.sort((a,b) => b.edad - a.edad);
console.log(listObjetos);

//Comparar listas
//.every()

const array3 = [4,6,8,5,3,6,1,9,7,1,0,12];

const resultado = array3.every(value => {
    if (typeof value === 'number'){
        return true;
    }
    else{
        return false;
    }
})

console.log(resultado);
//option 2
const resultado2 = array3.every(value => {
    if (value > 0){
        return true;
    }
    else{
        return false;
    }
})

console.log(resultado2);

//option 3
const resultado3 = array3.every(value => value > 0)
console.log(resultado3);

//comparacion
const ar1 = [1, 2, 3, 4]; 
const ar2 = [1, 2, 3, 4];

console.log(ar1 === ar2);

//function compare
const compararArryas  = (array_1, array_2) => {
    if (array_1.length !== array_2.length) return false
    const result = array_1.every((value, index)=> value === array_2[index])
    return result
}

console.log(compararArryas(ar1,ar2));

const ar3 = [1, 6, 3, 9];
console.log(compararArryas(ar1,ar3));