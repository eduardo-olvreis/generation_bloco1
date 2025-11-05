import readline from 'readline-sync';

let idade;
let identidade;
let desenvolvedor;
let continuar = true

let backend = 0;
let mulhersCisTransFront = 0;
let homensCisTransMobile40 = 0;
let naobinarioFullstack30 = 0;
let totalResponderam = 0;
let mediaIdade = 0;

while(continuar){
    idade = readline.questionInt("Digite a idade: ")

    console.log(`Identidade de genero: \n1 - Mulher Cis\n2 - Homem Cis\n3 - Nao binario\n4 - Mulher Trans\n5 - Homem Trans\n6 - Outros`)
    identidade = readline.questionInt("Digite o numero da opcao: ")

    console.log(`Pessoa Desenvolvedora: \n1 - Backend\n2 - Frontend\n3 - Mobile\n4 - FullStack`)
    desenvolvedor = readline.questionInt("Digite o numero da opcao: ")

    if(desenvolvedor === 1){
        backend += 1
    } else if((identidade === 1 || identidade === 4) && desenvolvedor === 2){
        mulhersCisTransFront += 1
    } else if((identidade === 2 || identidade === 5) && desenvolvedor === 3 && idade > 40){
        homensCisTransMobile40 += 1
    } else if(identidade === 3 && desenvolvedor === 4 && idade < 30){
        naobinarioFullstack30 += 1
    }
    if(idade){
        totalResponderam += 1
        mediaIdade += idade
    }


    continuar = readline.question("Deseja continuar? (S/N): ")
    if (continuar === "N"){
        continuar = false
    } 
}

mediaIdade = mediaIdade / totalResponderam

console.log(`\nTotal de pessoas desenvolvedoras Backend: ${backend}`)
console.log(`Total de mulheres cis e trans desenvolvedoras Frontend: ${mulhersCisTransFront}`)
console.log(`Total de homens cis e trans desenvolvedores Mobile maiores de 40 anos: ${homensCisTransMobile40}`)
console.log(`Total de pessoas nao binarias dsesenvolvedoras FullStack menores de 30 anos: ${naobinarioFullstack30}`)
console.log(`Total de pessoas que responderam a pesquisa: ${totalResponderam}`)
console.log(`A media de idade das pessoas que responderam a pesquisa: ${mediaIdade}\n`)