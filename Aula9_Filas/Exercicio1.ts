import { Queue } from "./Queue";
import readline = require("readline-sync")

const fila = new Queue<string>();

let opcao: number

let novoCliente: string

while(true){
    console.log(`\n****************************************************\n1 - Adicionar Cliente na Fila\n2 - Listar Todos os Clientes\n3 - Retirar Cliente da Fila\n0 - Sair\n****************************************************\n`)
    opcao = readline.questionInt("Selecione uma opcao: ")

    if(opcao === 1){
        novoCliente = readline.question("\nDigite o nome do novo cliente: ")
        fila.enqueue(novoCliente)
        console.log(`\nCliente adicionado!`)
    } else if(opcao === 2){
        console.log(`\nLista de Clientes na fila: \n`)
        fila.printQueue()
    } else if(opcao === 3){
        if(fila.count() === 0){
            console.log(`\nA fila esta vazia!`)
        } else{
            fila.dequeue()
            console.log(`\nO Cliente foi chamado!\nNova fila: \n`)
            fila.printQueue()
        }
    } else if(opcao === 0){
        console.log("\nPrograma finalizado!\n")
        break
    } else{
        console.log(`\nOpcao invalida!`)
    }
}