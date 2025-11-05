import readline from 'readline-sync';

let nota1;
let nota2;
let nota3;
let nota4;
let media;

nota1 = readline.questionFloat("\nNota 1: ")
nota2 = readline.questionFloat("Nota 2: ")
nota3 = readline.questionFloat("Nota 3: ")
nota4 = readline.questionFloat("Nota 4: ")

media = (nota1+nota2+nota3+nota4)/4

console.log(`\n--------------------\nMedia final: ${media}\n--------------------\n`)
