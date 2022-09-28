let Fibonacci = (amount)=> {
    let acum = 0
    let arrayResult= [1]
    for (let i = 0; i < amount - 1; i++){
        if (arrayResult.length === 1){
            acum = arrayResult[i] + i
        }
        else
        {
            acum = arrayResult[i] + arrayResult[i-1]
        }
        arrayResult.push(acum)
    }
    return arrayResult
} 

let result = Fibonacci(1)
console.log(result);