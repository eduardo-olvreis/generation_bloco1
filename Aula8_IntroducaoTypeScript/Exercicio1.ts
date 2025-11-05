import readline = require("readline-sync")

const cores: Array<string> = new Array<string>()
let perguntaCor: string;

for(let i = 1; i < 6; i++){
    perguntaCor = readline.question("Digite uma cor: ")
    cores.push(perguntaCor)
}

console.log("\nLista das cores:")
for(let cor of cores){
    console.log(cor)
}

cores.sort()

console.log("\nCores ordenadas: ")
for(let cor of cores){
    console.log(cor)
}
