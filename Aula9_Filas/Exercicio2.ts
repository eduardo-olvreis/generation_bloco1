import { Stack } from "./Stack";
import readline = require("readline-sync")

const pilha = new Stack<string>();

let opcao: number
let novoLivro: string

while(true){
    console.log(`\n****************************************************\n1 - Adicionar Livro na pilha\n2 - Listar todos os Livros\n3 - Retirar Livro da pilha\n0 - Sair\n****************************************************\n`)
    opcao = readline.questionInt("Selecione uma opcao: ")

    if(opcao === 1){
        novoLivro = readline.question("Digite o nome do livro: ")
        pilha.push(novoLivro)
    } else if(opcao === 2){
        console.log("Lista de Livros na pilha:")
        pilha.printStack()
    } else if(opcao === 3){
        if(pilha.isEmpty()){
            console.log("A pilha esta vazia!")
        } else{
            pilha.pop()
            console.log("Pilha:")
            pilha.printStack()
            console.log("Um livro foi retirado da pilha!")
        }
    } else if(opcao === 0){
        console.log("Programa finalizado!")
        break
    } else{
        console.log("Opcao invalida!")
    }
}