// Criando o menu 
const prompt = require('prompt-sync')(); // traz as dependências do prompt-sync para o código, para que seja possível digitar no terminal
// Utilizando o SWitch case para criar um menu de opções
let opcaoDigitada = prompt("Digite a opção desejada (1, 2 ou 3): ");

let opcaoEscolhida = "2";



switch (opcaoDigitada == 2) {

    case "1": 

    console.log("Abrindo o painel de NOVO CADASTRO...");

    break; // Break é utilizado para sair do switch case, caso não seja colocado, o código vai continuar executando os próximos cases

    case "2":

    console.log("Carregando a LISTA DE JOGADORES...");
     break;
    //
    case "3": 

    console.log("Calculando a MÉDIA DA EQUIPE..."); 

    break; 

    default: 

    // O default pega tudo que não for 1, 2 ou 3 

    console.log("Opção inválida. Por favor, escolha um número do menu."); 

    break; 
}