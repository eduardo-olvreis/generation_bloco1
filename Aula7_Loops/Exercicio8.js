import readline from 'readline-sync';

let numero;
let vetor = []

let indicesImpares = []
let pares = []
let soma = 0;
let media = 0;

for(let i = 0; i< 10; i++){
    numero = readline.questionInt("Digite um numero: ")
    vetor.push(numero)

    if(i % 2 !== 0){
        indicesImpares.push(numero)
    }

    if(numero % 2 === 0){
        pares.push(numero)
    }

    soma += numero
}

media = soma / vetor.length

console.log(`\nElementos nos indices impares: ${indicesImpares}`)
console.log(`Elementos nos indices pares: ${pares}`)
console.log(`Soma: ${soma}`)
console.log(`Media: ${media}\n`)