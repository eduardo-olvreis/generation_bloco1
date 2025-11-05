import readline from 'readline-sync';

let quantidade;

let valorItem;
let valorFinal;

let numero = readline.questionInt("\nDigite a opcao do menu (1 - 6): ")

switch(numero){
    case 1: 
        console.log("Cachorro quente")
        valorItem = 10
        break;
    case 2: 
        console.log("X-Salada")
        valorItem = 15
        break;
    case 3: 
        console.log("X-Bacon")
        valorItem = 18
        break;
    case 4: 
        console.log("Bauru")
        valorItem = 12
        break;
    case 5: 
        console.log("Refrigerante")
        valorItem = 8
        break;
    case 6: 
        console.log("Suco de Laranja")
        valorItem = 13
        break;
    default: 
        console.log("Opcao invalida")
        valorItem = 0
        break;
}

quantidade = readline.questionInt("Digite a quantidade: ")
valorFinal = quantidade * valorItem

if(valorItem === 0){
    console.log("Opcao de menu invalida, favor escolher uma opcao valida.\n")
} else{
    console.log(`Valor total: R$ ${valorFinal}\n`)
}