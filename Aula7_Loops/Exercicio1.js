import readline from 'readline-sync';

let numero1 = readline.questionInt("Digite o primeiro numero: ")
let numero2 = readline.questionInt("Digite o segundo numero: ")

if(numero1 < numero2){
    for(let i = numero1; i < numero2; i++){
        if(i % 3 === 0 && i % 5 === 0){
            console.log(`${i} é multiplo de 3 e 5`)
        }
    }

} else{
    console.log("O primeiro numero deve ser MENOR que o segundo numero!")
}