function Suma(a,b){
    return a + b
}

function Multiplica(a,b){
    return a * b
}

function Potencia (a,b){
    return a ** b
}

function Factorial (a){
    let factorial = 1;
    for(let i = 2; i <= a; i++){
        factorial *= i;
    }
    return factorial;
}

// 
module.exports ={
    Suma,
    Multiplica,
    Potencia,
    Factorial
}