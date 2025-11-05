import readline = require("readline-sync")

const numeros: Set<number> = new Set<number>([2,5,1,3,4,9,7,8,10,6])

let contem: boolean;

let numero: number = readline.questionInt("\nDigite um numero inteiro: ")

contem = numeros.has(numero)

if(contem){
    console.log(`\nO numero ${numero} foi encontrado!\n`)
} else{
    console.log(`\nO numero ${numero} nao foi encontrado!\n`)
}


