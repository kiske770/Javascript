
const day = 4
const month = 2


if (typeof day !=='number'){
    throw new Error('The value must be a numeric value!.')
}

if (typeof month !=='number'){
    throw new Error('The value must be a numeric value!.')
}

//let long = Math.ceil(Math.random() * 100)
let long = 6
//const array = new Array(long)
const array = new Array(2, 2, 1, 3, 2, 2)
//   for (let i =0; i<= array.length-1; i++){
//       array[i]= Math.ceil(Math.random() * 5);
//   }

//console.log(array)
let acum = 0;
let auxArr = new Array();
let groups = new Array();
let i = 0;

while (i < array.length){
    
    switch (month){
        case 1:
            if (array[i] === day){
                auxArr.push(array[i]);

            if (groups.length === 0){
                groups = new Array(auxArr)
            }
            else{
                groups.push(auxArr)
            }
            
            auxArr= new Array()
            }
            i++
        break;
        
        case 2:
            
            if (i === 0 || acum === 0){
                acum = array[i]
                auxArr.push(acum)
                i++
            }
            else{
                if (acum + array[i] === day) {
                    
                    auxArr.push(array[i]);

                    if (groups.length === 0) {
                        groups = new Array(auxArr)
                    }
                    else{
                        groups.push(auxArr)
                    }

                    acum = 0                  
                    auxArr = new Array();
                }
                else if (acum + array[i] < day){
                        acum = acum + array[i]
                        auxArr.push(array[i]);
                        i++
                        }
                        else{
                            acum = 0;
                            auxArr = new Array();
                        }
            }
            break;

        default:
            if (i === 0 || acum === 0){
                acum = array[i]
                auxArr.push(acum)
                i++
            }
            else{
                 if (acum + array[i] < day){
                    auxArr.push(array[i])
                    acum = acum + array[i]
                    i++
                 }
                 else if (acum + array[i] === day){
                        auxArr.push(array[i])
    
                        if (groups.length === 0) {
                            groups = new Array(auxArr)
                        }
                        else{
                            groups.push(auxArr)
                        }
    
                        acum = 0;
                        auxArr = new Array();
                        i = i - 1

                 }
                 else{
                    acum = 0;
                    auxArr = new Array();
                }
            }
        
            break;
        
    }
}

console.log(groups)
console.log(groups.length)