import readline from 'readline-sync';

let fezDoacao
let estaApto

let nome = readline.question("\nDigite seu nome: ")
let idade = readline.questionInt("Digite sua idade: ")
let perguntaDoacao = readline.question("Ja fez doacao de sangue anteriormente? (SIM / NAO) ")

if(perguntaDoacao === "SIM" || perguntaDoacao === "sim"){
    fezDoacao = true
} else{
    fezDoacao = false
}

if(idade >= 18 && idade <= 69){
    if(idade >= 60 && idade <= 69){
        if(fezDoacao === true){
            estaApto = false
        } else{
            estaApto = true
        }
    } else{
        estaApto = true
    }
} else{
    estaApto = false
}

if(estaApto === true){
    console.log(`\n--------------------\n${nome} esta apto para doar sangue!\n--------------------\n`)
} else{
    console.log(`\n--------------------\n${nome} NAO esta apto para doar sangue!\n--------------------\n`)
}