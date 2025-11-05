import readline from 'readline-sync';

let salario;
let abono;
let novoSalario;

salario = readline.questionFloat("\nDigite seu salario: ")
abono = readline.questionFloat("Digite seu abono: ")

novoSalario = salario + abono

console.log(`\n--------------------\nNovo Salario: ${novoSalario}\n--------------------\n`)