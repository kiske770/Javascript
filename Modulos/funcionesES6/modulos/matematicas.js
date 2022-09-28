export function Suma(a,b){
    return a + b
}

export function Multiplica(a,b){
    return a * b
}

export function Potencia (a,b){
    return a ** b
}

export function Factorial (a){
    let factorial = 1;
    for(let i = 2; i <= a; i++){
        factorial *= i;
    }
    return factorial;
}

