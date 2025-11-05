import readline from 'readline-sync'

let matriz = []
let somaPrincipal = 0
let somaSecundaria = 0

for (let i = 0; i < 3; i++) {
    matriz[i] = [] 
    for (let j = 0; j < 3; j++) {
        let valor = readline.questionInt(`Digite um numero para compor a matriz: `)
        matriz[i][j] = valor
  }
}

console.log("\nMatriz 3x3:")
for (let i = 0; i < 3; i++) {
    console.log(matriz[i])
}

console.log("\nDiagonal Principal:")
for (let i = 0; i < 3; i++) {
    console.log(matriz[i][i])
    somaPrincipal += matriz[i][i]
}

console.log("\nDiagonal Secundária:")
for (let i = 0; i < 3; i++) {
    console.log(matriz[i][2 - i])
    somaSecundaria += matriz[i][2 - i]
}

console.log(`\nSoma da Diagonal Principal: ${somaPrincipal}`)
console.log(`Soma da Diagonal Secundária: ${somaSecundaria}\n`)
