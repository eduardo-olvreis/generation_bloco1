import readline from 'readline-sync';

let numero;
let somatorio = 0

do{
    numero = readline.questionInt("Digite um numero: ")
    if(numero > 0){
        somatorio += numero
    }
} while (numero !== 0);

console.log(`\nA soma dos numeros positivos é: ${somatorio}\n`)