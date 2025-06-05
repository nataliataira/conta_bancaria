import readlinesync from 'readline-sync';
import { colors } from './src/util/Colors';
import { ContaPoupanca } from './src/model/ContaPoupanca';
import { ContaCorrente } from './src/model/ContaCorrente';
import { ContaController } from './src/controller/ContaController';

export function main() {
    let contas: ContaController = new ContaController();
    const tiposContas = ['Conta Corrente', 'Conta Poupanca'];
    let opcao, numero, agencia, tipo, saldo, limite, aniversario, valor;
    let numeroDestino: number;
    let titular: string;
    
    while (true) {
        console.log(colors.fg.yellow,`                                                    \n
----------------------------------------------------\n
                                                    \n
            BANCO DO BRAZIL COM Z                   \n
                                                    \n
----------------------------------------------------\n
                                                    \n
            1 - Criar Conta                         \n
            2 - Listar todas as Contas              \n
            3 - Buscar Conta por Numero             \n
            4 - Atualizar Dados da Conta            \n
            5 - Apagar Conta                        \n
            6 - Sacar                               \n
            7 - Depositar                           \n
            8 - Transferir valores entre Contas     \n
            9 - Sair                                \n
                                                    \n
----------------------------------------------------\n
                                                    \n`,
colors.reset);

        console.log('Digite a opção desejada: ');
        opcao = readlinesync.questionInt('', {limitMessage: 'Digite uma opção válida.'});

        if (opcao === 9) {
            console.log(
                colors.fg.greenstrong,
                "\nBanco do Brazil com Z - O seu Futuro começa aqui!"
            );
            about();
            console.log(colors.reset, "");
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log(colors.fg.whitestrong, '\n\nCriar Conta\n\n', colors.reset);

                console.log("Digite o nome da agência: ");
                agencia = readlinesync.questionInt("");

                console.log("Digite o Nome do Titular da conta: ");
                titular = readlinesync.question("");

                console.log("\nDigite o tipo da Conta: ");
                tipo = readlinesync.keyInSelect(tiposContas, "", { cancel: false }) + 1;

                console.log("\nDigite o Saldo da conta (R$): ");
                saldo = readlinesync.questionFloat("");

                switch (tipo) {
                    case 1:
                        console.log("Digite o Limite da Conta (R$): ");
                        limite = readlinesync.questionFloat("");
                        contas.cadastrar(new ContaCorrente(contas.gerarNumero(), agencia, tipo, titular, saldo, limite));
                        break;

                    case 2:
                        console.log("Digite o Dia do aniversário da Conta Poupança: ");
                        aniversario = readlinesync.questionInt("");
                        contas.cadastrar(new ContaPoupanca(contas.gerarNumero(), agencia, tipo, titular, saldo, aniversario));
                        break;
                }

                keyPress()
                break;

            case 2:
                console.log(colors.fg.whitestrong, '\n\nListar todas as Contas\n\n', colors.reset);

                contas.listarTodas();

                keyPress();
                break;

            case 3:
                console.log(colors.fg.whitestrong, '\n\nConsultar dados da Conta - por número\n\n', colors.reset);

                console.log("Digite o número da conta: ");
                numero = readlinesync.questionInt("");

                contas.procurarPorNumeroConta(numero);

                break;

            case 4:
                console.log(colors.fg.whitestrong,'\n\nAtualizar dados da Conta\n\n',colors.reset);

                console.log("Digite o número da Conta: ");
                numero = readlinesync.questionInt("");

                let conta = contas.buscarNoArray(numero);

                if (conta != null) {

                    console.log("Digite o Número da agência: ");
                    agencia = readlinesync.questionInt("");

                    console.log("Digite o Nome do Titular da conta: ");
                    titular = readlinesync.question("");

                    tipo = conta.tipo;

                    console.log("\nDigite o Saldo da conta (R$): ");
                    saldo = readlinesync.questionFloat("");

                    switch (tipo) {
                        case 1:
                            console.log("Digite o Limite da Conta (R$): ");
                            limite = readlinesync.questionFloat("");
                            contas.atualizar(new ContaCorrente(numero, agencia, tipo, titular, saldo, limite));
                            break;

                        case 2:
                            console.log("Digite o Dia do aniversário da Conta Poupança: ");
                            aniversario = readlinesync.questionInt("");
                            contas.atualizar(new ContaPoupanca(numero, agencia, tipo, titular, saldo, aniversario));

                            break;
                    }

                } else {
                    console.log(colors.fg.red, `\nA Conta numero: ${numero} não foi encontrada!`, colors.reset);
                }

                break;

            case 5:
                console.log(colors.fg.whitestrong,'\n\nApagar uma Conta\n\n',colors.reset);

                console.log("Digite o número da Conta: ");
                numero = readlinesync.questionInt("");
                contas.deletar(numero);

                break;

            case 6:
                console.log(colors.fg.whitestrong,'\n\nSaque\n\n',colors.reset);

                console.log("Digite o número da Conta: ");
                numero = readlinesync.questionInt("");

                console.log("\nDigite o valor do Saque (R$): ");
                valor = readlinesync.questionFloat("");

                contas.sacar(numero, valor);

                break;

            case 7:
                console.log(colors.fg.whitestrong,'\n\nDepósito\n\n',colors.reset);

                console.log("Digite o número da Conta: ");
                numero = readlinesync.questionInt("");

                console.log("\nDigite o valor do Depósito (R$): ");
                valor = readlinesync.questionFloat("");

                contas.depositar(numero, valor);

                break;

            case 8:
                console.log(colors.fg.whitestrong,'\n\nTransferência entre Contas\n\n',colors.reset);

                console.log("Digite o número da Conta de Origem: ");
                numero = readlinesync.questionInt("");

                console.log("Digite o número da Conta de Destino: ");
                numeroDestino = readlinesync.questionInt("");

                console.log("\nDigite o valor do Depósito (R$): ");
                valor = readlinesync.questionFloat("");

                contas.transferir(numero, numeroDestino, valor);

                break;

            default:
                console.log(colors.fg.whitestrong,'\nOpção inválida!\n',colors.reset);
        }
    }
}

export function about(): void {
    console.log("-----------------------------------------------------");
    console.log("Projeto Desenvolvido por: ");
    console.log("Generation Brasil - generation@generation.org");
    console.log("github.com/conteudoGeneration");
    console.log("-----------------------------------------------------");
}

export function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

main();