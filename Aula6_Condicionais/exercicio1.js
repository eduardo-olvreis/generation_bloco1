import readline from 'readline-sync';

let A = readline.questionInt("\nDigite o valor de A: ")
let B = readline.questionInt("Digite o valor de B: ")
let C = readline.questionInt("Digite o valor de C: ")

if((A + B) > C){
    console.log(`\n--------------------\nA soma de A + B = ${A+B} é MAIOR que C = ${C}.\n--------------------\n `)
} else if((A + B) < C){
    console.log(`\n--------------------\nA soma de A + B = ${A+B} é MENOR que C = ${C}.\n--------------------\n `)
} else{
    console.log(`\n--------------------\nA soma de A + B = ${A+B} é IGUAL a C = ${C}.\n--------------------\n `)
}
