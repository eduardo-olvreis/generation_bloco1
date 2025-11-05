import readline = require("readline-sync")

const numeros: Array<number> = new Array<number>(2,5,1,3,4,9,7,8,10,6)

let numero = readline.questionInt("\nDigite o numero que voce deseja encontrar: ")
let contem: boolean = false;

for(let i of numeros){
    if(numero === numeros[i]){
        contem = true
        console.log(`\nO numero ${numero} esta localizado na posicao: ${i}\n`)
        break
    }
}

if(!contem){
    console.log(`\nO numero ${numero} nao foi encontrado!\n`)
}