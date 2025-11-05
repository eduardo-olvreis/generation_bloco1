import readline = require("readline-sync")

const numeros: Set<number> = new Set<number>([])
let numero: number

for(let i = 0; i < 10; i++){
    numero = readline.questionInt("\nDigite um numero inteiro: ")
    numeros.add(numero)
}

console.log("Dados do Set: ")
for(let n of numeros){
    console.log(n)
}