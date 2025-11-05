import readline from 'readline-sync';

let saldo = 1000
let valor;

console.log("\n1 - Saldo\n2 - Saque\n3 - Deposito\n")

let opcao = readline.questionInt("Digite a opcao: ")

switch(opcao){
    case 1: 
        console.log(`\nOperacao - Saldo\n`)
        console.log(`Seu saldo: R$ ${saldo}`)
        break;
    case 2:
        console.log("\nOperacao - Saque\n")
        valor = readline.questionFloat("Valor: ")
        if(saldo < valor){
            console.log("Saldo insuficiente!")
        } else{
            saldo = saldo - valor
            console.log(`Novo saldo: ${saldo}`)
        }
        break;
    case 3:
        console.log("\nOperacao - Deposito\n")
        valor = readline.questionFloat("Valor: ")
        saldo = saldo + valor
        console.log(`Novo saldo: R$ ${saldo}`)
        break;
    case 4:
        console.log("Operacao Invalida!")
        break
}