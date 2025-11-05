import readline from 'readline-sync';

let numero;
let media = 0
let quantidade = 0

do{
    numero = readline.questionInt("Digite um numero: ")
    if(numero % 3 === 0 && numero !== 0){
        media += numero
        quantidade += 1
    }
} while(numero !== 0);

media = media / quantidade

console.log(`\nA media de todos os numeros multiplos de 3 é: ${media}\n`)