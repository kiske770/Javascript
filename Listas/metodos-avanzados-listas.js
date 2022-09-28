//Metodos avanzados con listas
//.map()

const array =['Bogota', 'Medellin', 'Cali', 'Bucaramanga', 'Barranquilla', 'Pereira'];

array.forEach(c=> { console.log(c) });

const newArray = array.map((value, index)=> 
     `${index + 1} - ${value}`
);

console.log(newArray);

// .filter() 
const arrayObjeto= [
    {nombre: 'Mario', edad: 37},
    {nombre: 'Carolina', edad: 38},
    {nombre: 'Leonor', edad: 72},
    {nombre: 'Padre', edad: 69},
    {nombre: 'Samuel', edad: 8}
];

//option 1
const personOld = arrayObjeto.filter(obj =>{
    if (obj.edad>=40){
        return true;
    }
    else{
        return false;
    }
});

console.log(personOld);


//option 2
const personaMayor = arrayObjeto.filter(obj=> obj.edad>=40);
console.log(personaMayor);

const nuevaLista =  arrayObjeto.filter(obj => obj.nombre !== 'Mario');
console.log(nuevaLista);

//.reduce()
const values = [3, 5, 78, 96, 85, 41, 6 ,2,16,35,65,42,21];
const suma = values.reduce((acumulador, actual, i, arrayOriginal)=> {
    console.log(acumulador);
    console.log(actual);
    console.log(i);
    console.log(arrayOriginal);
    return acumulador + actual
})
