import { Suma, Product } from "./functions/controller.js";
import chalk from 'chalk';

const result1 = Suma(1,2)
console.log(`The result of first sum is ${result1}`)
const result2 = Suma(4,5)
console.log(`The result of second sum is ${result2}`)
console.log(chalk.green(`The result of product is ${Product(result1,result2)}`));