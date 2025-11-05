import readline from 'readline-sync';

let idade;
let menor21 = 0;
let maior50 = 0;

while(true){
    idade = readline.questionInt("Digite uma idade: ")
    if(idade < 21 && idade >= 0){
        menor21 += 1
    } else if(idade > 50){
        maior50 += 1
    }
    
    if(idade < 0){
        break
    }
}

console.log(`Total de pessoas menores de 21 anos: ${menor21}`)
console.log(`Ttotal de pessoas maiores de 50 anos: ${maior50}`)