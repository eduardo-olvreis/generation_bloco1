import readline from 'readline-sync';

let numero1 = readline.questionFloat("\nDigite o primeiro numero: ")
let numero2 = readline.questionFloat("Digite o segundo numero: ")

console.log("\n1 - Soma\n2 - Subtracao\n3 - Multiplicacao\n4 - Divisao\n")
let opcao = readline.questionInt("Selecione uma opcao: ")

switch(opcao){
    case 1: 
        console.log(`${numero1} + ${numero2} = ${numero1 + numero2}`)
        break;
    case 2:
        console.log(`${numero1} - ${numero2} = ${numero1 - numero2}`)
        break;
    case 3:
        console.log(`${numero1} * ${numero2} = ${numero1 * numero2}`)
        break;
    case 4:
        console.log(`${numero1} / ${numero2} = ${numero1 / numero2}`)
        break;
    default:
        console.log("Operacao invalida.")
        break;
}