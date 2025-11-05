import readline from 'readline-sync';

let salarioBruto;
let adicionalNoturno;
let horasExtras;
let descontos;
let salarioLiquido;

salarioBruto = readline.questionFloat("\nSalario bruto: ")
adicionalNoturno = readline.questionFloat("Adicional noturno: ")
horasExtras = readline.questionFloat("Horas extras: ")
descontos = readline.questionFloat("Descontos: ")

salarioLiquido = salarioBruto + adicionalNoturno + (horasExtras * 5) - descontos

console.log(`\n--------------------\nSalario Liquido: ${salarioLiquido}\n--------------------\n`)
