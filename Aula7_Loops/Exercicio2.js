import readline from 'readline-sync';

let numero;
let pares = 0
let impares = 0

for(let i = 1; i < 11; i++){
    numero = readline.questionInt(`Digite o ${i}º numero: `)
    if(numero % 2 === 0){
        pares += 1
    } else{
        impares += 1
    }
}

console.log(`Total de numeros pares: ${pares}`)
console.log(`Total de numeros impares: ${impares}`)
