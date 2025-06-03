import readlinesync from 'readline-sync';
import { colors } from './src/util/Colors';
import { Conta } from './src/model/Conta';

export function main() {
    let option: number;

    const teste1: Conta = new Conta(10001, 10001, 1, "Claudia Rodrigues", 2350.40);
    teste1.visualizar();
    teste1.sacar(350.40);
    teste1.visualizar();
    teste1.sacar(5000.50); //tenta sacar mais do que tem
    teste1.depositar(500);
    teste1.visualizar();

    const teste2: Conta = new Conta(10002, 10001, 2, "Claudia Rodrigues", 60456.40);
    teste2.visualizar();
    teste2.sacar(-350.40); //tenta sacar um valor negativo
    teste2.visualizar();
    teste2.sacar(5000.50); //tenta sacar mais do que tem
    teste2.depositar(500);
    teste2.visualizar();
    

    while (true) {
        console.log(colors.bg.black, colors.fg.yellow,
        "                                                   \n",
        "----------------------------------------------------\n",
        "                                                    \n",
        "               BANCO DO BRAZIL COM Z                \n",
        "                                                    \n",
        "----------------------------------------------------\n",
        "                                                    \n",
        "           1 - Criar Conta                          \n",
        "           2 - Listar todas as Contas               \n",
        "           3 - Buscar Conta por Numero              \n",
        "           4 - Atualizar Dados da Conta             \n",
        "           5 - Apagar Conta                         \n",
        "           6 - Sacar                                \n",
        "           7 - Depositar                            \n",
        "           8 - Transferir valores entre Contas      \n",
        "           9 - Sair                                 \n",
        "                                                    \n",
        "----------------------------------------------------\n",
        "                                                    \n",
        colors.reset);

        console.log('Digite a opção desejada: ');
        option = readlinesync.questionInt('', {limitMessage: 'Digite uma opção válida.'});

        if (option === 9) {
            console.log(
                colors.fg.greenstrong,
                "\nBanco do Brazil com Z - O seu Futuro começa aqui!"
            );
            about();
            console.log(colors.reset, "");
            process.exit(0);
        }

        switch (option) {
            case 1:
                console.log(
                    colors.fg.whitestrong,
                    '\n\nCriar Conta\n\n',
                    colors.reset
                );
                keyPress()
                break;
            case 2:
                console.log(
                    colors.fg.whitestrong,
                    '\n\nListar todas as Contas\n\n',
                    colors.reset
                );
                keyPress();
                break;
            case 3:
                console.log(
                    colors.fg.whitestrong,
                    '\n\nConsultar dados da Conta - por número\n\n',
                    colors.reset
                );
                break;
            case 4:
                console.log(
                    colors.fg.whitestrong,
                    '\n\nAtualizar dados da Conta\n\n',
                    colors.reset
                );
                break;
            case 5:
                console.log(
                    colors.fg.whitestrong,
                    '\n\nApagar uma Conta\n\n',
                    colors.reset
                );
                break;
            case 6:
                console.log(
                    colors.fg.whitestrong,
                    '\n\nSaque\n\n',
                    colors.reset
                );
                break;
            case 7:
                console.log(
                    colors.fg.whitestrong,
                    '\n\nDepósito\n\n',
                    colors.reset
                );
                break;
            case 8:
                console.log(
                    colors.fg.whitestrong,
                    '\n\nTransferência entre Contas\n\n',
                    colors.reset
                );
                break;
            default:
                console.log(
                    colors.fg.whitestrong,
                    '\nOpção inválida!\n',
                    colors.reset
                );
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