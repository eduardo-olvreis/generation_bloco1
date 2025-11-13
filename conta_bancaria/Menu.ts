import readline = require("readline-sync")
import { colors } from "./src/util/Colors"
import { Conta } from "./src/model/Conta"
import { ContaCorrente } from "./src/model/ContaCorrente"
import { ContaPoupanca } from "./src/model/ContaPoupanca"
import { ContaController } from "./src/controller/ContaController"
import { read } from "fs"

export function main() {

    let contas: ContaController = new ContaController()

    let opcao, numero, agencia, tipo, saldo, limite, aniversario, valor, numeroDestino: number
    let titular: string
    const tiposContas = ["Conta Corrente", "Conta Poupança"]

    console.log("\nCriar Contas\n");

    let cc1: ContaCorrente = new ContaCorrente(contas.gerarNumero(), 123, 1, "João da Silva", 1000, 100.0);
    contas.cadastrar(cc1);

    let cc2: ContaCorrente = new ContaCorrente(contas.gerarNumero(), 124, 1, "Maria da Silva", 2000, 100.0);
    contas.cadastrar(cc2);

    let cp1: ContaPoupanca = new ContaPoupanca(contas.gerarNumero(), 125, 2, "Mariana dos Santos", 4000, 12);
    contas.cadastrar(cp1);

    let cp2: ContaPoupanca = new ContaPoupanca(contas.gerarNumero(), 125, 2, "Juliana Ramos", 8000, 15);
    contas.cadastrar(cp2);

    contas.listarTodas();    

    while(true) {

        console.log(colors.bg.black, colors.fg.yellow,
                    "\n************************************************************\n")
        console.log("                   BANCO DO BRAZIL COM Z                    ")
        console.log("\n************************************************************\n")
        console.log("          1 - Criar Conta                                   ")
        console.log("          2 - Listar todas as Contas                        ")
        console.log("          3 - Buscar Conta por Numero                       ")
        console.log("          4 - Atualizar Dados da Conta                      ")
        console.log("          5 - Apagar Conta                                  ")
        console.log("          6 - Sacar                                         ")
        console.log("          7 - Depositar                                     ")
        console.log("          8 - Transferir valores entre contas               ")
        console.log("          9 - Sair                                          ")
        console.log("\n************************************************************\n",
        colors.reset)

        console.log("Entre com a opção desejada: ")
        opcao = readline.questionInt("")

        if(opcao === 9){
            console.log(colors.fg.greenstrong,"\nBanco do Brazil com Z - O seu Futuro começa aqui!")
            sobre()
            console.log(colors.reset, "")
            process.exit(0)
        }

        switch(opcao){
            case 1:
                console.log(colors.fg.whitestrong,"\n\nCriar Conta\n\n", colors.reset)
                
                console.log("Digite o Número da agência: ")
                agencia = readline.questionInt("")

                console.log("Digite o Nome do Titular da conta: ")
                titular = readline.question("")

                console.log("\nDigite o tipo da Conta: ")
                tipo = readline.keyInSelect(tiposContas, "", {cancel: false}) +1

                console.log("\nDigite o saldo da conta (R$): ")
                saldo = readline.questionFloat("")

                switch (tipo){
                    case 1:
                        console.log("Digite o Limite da Conta (R$): ")
                        limite = readline.questionFloat("")
                        contas.cadastrar(
                            new ContaCorrente(contas.gerarNumero(), agencia, tipo, titular, saldo, limite)
                        )
                        break
                    case 2:
                        console.log("Digite o Dia do aniversário da Conta Poupança: ")
                        aniversario = readline.questionInt("")
                        contas.cadastrar(new ContaPoupanca(contas.gerarNumero(), agencia, tipo, titular, saldo, aniversario)
                    )
                        break
                }
                
                keyPress()
                break;
            
            case 2:
                console.log(colors.fg.whitestrong,"\n\nListar todas as Contas\n\n", colors.reset)
                contas.listarTodas()
                    keyPress()
                break;

            case 3:
                console.log(colors.fg.whitestrong,"\n\nConsultar dados da Conta - por número\n\n", colors.reset)
                
                console.log("Digite o número da Conta: ")
                numero = readline.questionInt("")
                contas.procurarPorNumero(numero)

                keyPress()
                break;

            case 4:
                console.log(colors.fg.whitestrong,"\n\nAtualizar dados da Conta\n\n", colors.reset)

                console.log("Digite o número da Conta: ")
                numero = readline.questionInt("")

                let conta = contas.buscarNoArray(numero)

                if(conta != null) {
                    console.log("Digite o Número da agência: ")
                    agencia = readline.questionInt("")

                    console.log("Digite o Nome do Titular da conta: ")
                    titular = readline.question("")

                    tipo = conta.tipo

                    console.log("\nDigite o Saldo da conta (R$): ")
                    saldo = readline.questionFloat("")

                    switch(tipo){
                        case 1:
                            console.log("Digite o Dia do aniversário da Conta Poupança: ")
                            limite = readline.questionFloat("")
                            contas.atualizar(new ContaCorrente(numero, agencia, tipo, titular, saldo, limite))
                            break
                        case 2:
                            console.log("Digite o dia do aniversário da Conta Poupança: ")
                            aniversario = readline.questionInt("")
                            contas.atualizar(new ContaCorrente(numero, agencia, tipo, titular, saldo, aniversario))
                            break
                    }
                } else{
                    console.log(colors.fg.red, "\nA Conta número: "+numero+" não foi encontrada!", colors.reset)
                }

                keyPress()
                break;

            case 5:
                console.log(colors.fg.whitestrong,"\n\nApagar uma Conta\n\n", colors.reset)

                console.log("Digite o número da Conta: ")
                numero = readline.questionInt("")
                contas.deletar(numero)
                
                keyPress()
                break;

            case 6:
                console.log(colors.fg.whitestrong,"\n\nSaque\n\n", colors.reset)

                console.log("Digite o número da Conta: ")
                numero = readline.questionInt("")

                console.log("\nDigite o valor do Saque (R$): ")
                valor = readline.questionFloat("")

                contas.sacar(numero,valor)

                keyPress()
                break;

            case 7:
                console.log(colors.fg.whitestrong,"\n\nDepósito\n\n", colors.reset)

                console.log("Digite o número da Conta: ")
                numero = readline.questionInt("")

                console.log("\nDigite o valor do Depósito (R$): ")
                valor =readline.questionFloat("")

                contas.depositar(numero,valor)

                keyPress()
                break;

            case 8:
                console.log(colors.fg.whitestrong,"\n\nTransferência entre Contas\n\n", colors.reset)

                console.log("Digite o número da conta de Origem: ")
                numero = readline.questionInt("")

                console.log("Digite o número da conta de Destino: ")
                numeroDestino = readline.questionInt("")

                console.log("\nDigite o valor do Depósito (R$): ")
                valor = readline.questionFloat("")

                contas.transferir(numero,numeroDestino,valor)

                keyPress()
                break;
            
            default:
                console.log(colors.fg.whitestrong,"\nOpção inválida!\n", colors.reset)
                keyPress()
                break;
        }
    }
}

export function sobre(): void {
    console.log("\n************************************************************\n")
    console.log("Projeto Desenvolvido por: Eduardo Reis")
    console.log("Generation Brasil - eduardop1@genstudents.org")
    console.log("https://github.com/eduardo-olvreis/")
}

function keyPress(): void {
    console.log(colors.reset, "")
    console.log("\nPressione enter para continuar...")
    readline.prompt()
}

main()

