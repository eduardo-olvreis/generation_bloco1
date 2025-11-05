import readline from 'readline-sync';

let encontrou = false

let vetor = [2,5,1,3,4,9,7,8,10,6]

let numero = readline.questionInt("Digite o numero que voce deseja encontrar: ")

for(let i = 0; i <= vetor.length; i++){
    if(numero === vetor[i]){
        console.log(`\nO numero ${numero} esta localizado na posicao: ${i}\n`)
        encontrou = true
    } 
}

if(encontrou === false){
    console.log(`\nO numero ${numero} nao foi encontrado!\n`)
}