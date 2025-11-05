import readline from 'readline-sync';

let numero1;
let numero2;
let numero3;
let numero4;

numero1 = readline.questionFloat("\nNumero 1: ")
numero2 = readline.questionFloat("Numero 2: ")
numero3 = readline.questionFloat("Numero 3: ")
numero4 = readline.questionFloat("Numero 4: ")

let calculo = (numero1 * numero2) - (numero3 * numero4)

console.log(`\n--------------------\nResultado: ${calculo}\n--------------------\n`)