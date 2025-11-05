import readline from 'readline-sync';

let numero = readline.questionInt("\nDigite o numero: ")

if (numero % 2 === 0){
    if (numero >= 0){
        console.log(`\n--------------------\nO numero ${numero} é PAR e POSITIVO\n--------------------\n`)
    } else{
        console.log(`\n--------------------\nO numero ${numero} é PAR e NEGATIVO\n--------------------\n`)
    }
} else{
    if (numero >= 0){
        console.log(`\n--------------------\nO numero ${numero} é IMPAR e POSITIVO\n--------------------\n`)
    } else{
        console.log(`\n--------------------\nO numero ${numero} é IMPAR e NEGATIVO\n--------------------\n`)
    }
}