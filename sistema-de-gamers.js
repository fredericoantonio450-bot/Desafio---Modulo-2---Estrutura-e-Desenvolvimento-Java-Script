const prompt = require('prompt-sync')();

let time = [];
let continuar = true;

function mostrarOpcoes(){
    console.log("\n==========================="); // Barra N é usado para fazer quebra de linha, para pular uma linha
    console.log("------- SISTEMA DE GAMERS -------");
    console.log("1 - Cadastrar");
    console.log("2 - Deletar");
    console.log("3 - Mostrar equipe");
    console.log("4 - Calculo da Média da equipe");
    console.log("5 - Atualizar pontuação");
    console.log("6 - Buscar jogador");
    console.log("7 - Sair");
    console.log("\n");

}

function mostraEquipe(){
    // Função para mostrar todos os jogadores cadastrado na equipe
   if(time.length === 0){
    return;
   }

   for(let i = 0; i < time.length; i++){ // estrutura de repetição para percorrer o array time, e mostrar todos os jogadores cadastrados
        let jogador = time[i];

        console.log((i + 1) + " . " + jogador.nome + " | Função: " + jogador.funcao + " | Pontuação :  " + jogador.pontuacao);
   }
}

function cadastrarJogador(){
  
        let nomeJogador = prompt("Digite o nome do jogador: ");
        let funcaoJogador = prompt("Digite a função do Jogador ");
        let pontuacaoJogador = Number(prompt("Digite a pontuação do jogador: "));

        if(isNaN(pontuacaoJogador)){ //Validação da pontuação do jogador, se for menor que 0 ou maior que 100, ele vai mostrar uma mensagem de erro
            console.log("Pontuação inválida!.");
            return;

        } else{
            
            let recruta = {
                nome: nomeJogador,
                funcao: funcaoJogador,
                pontuacao: pontuacaoJogador,

            }

            time.push(recruta); // adiciona o nome do usuário no array time
            console.log(" Jogador " + nomeJogador + "Foi cadastrado com sucesso! "); 
           
            console.log("-----------");
        }

        

}

function deletarJogador(){
    if(time === 0){
        console.log("Nenhum jogador cadastrado.");
        return;
    }

     let nomeDeletado = prompt("Digite o nome do jogador que deseja deletar: ");
     let indexDeletado = -1;

    for(let i = 0; i < time.length; i++){

        if(time[i].nome === nomeDeleatado){ // Verifica se o nome do jogador é igual ao nome digitado pelo usuário
            indexDeletado = i; // Se for igual, ele vai armazenar o índice do jogador no array time
            break; // E vai sair do loop, para não percorrer todo o array
        }

    }
   
    if(indexDeletado === -1){
        console.log("Jogador não encontrado.");
        console.log("-----------");
        return;
    }

    time.splice(indexDelatado, 1); // Remove o jogador do array time, usando o índice armazenado na variável indexDeletado
    console.log("Jogador " + nomeDeletado + " foi deletado com sucesso!");
}

function calcularMedia(){ 
     
    // Fuction para calcular a média da pontuação dos jogadores cadastrados na equipe
    if(time.length === 0){
        console.log("Nenhum jogador cadastrado.");
        return;
    }

    for(let i = 0; i < time.length; i++){
        totalPontucao = totalPontucao + time[i].pontuacao; // Soma a pontuação de todos os jogadores cadastrados na equipe
    }

    let mediaPontuacao = totalPontuacao / time.length; // Calcula a média da pontuação dos jogadores cadastrados na equipe

    console.log("O time possuí uma pontuação média de: " + mediaPontuacao);
}

function buscarJogador(){

    let nomeJogador = prompt("Digite o nome do jogador que deseja buscar: ");

    console.log("Buscando por: " + nomeJogador + "...");

    let encontrou = false; // Começando assumir que não encontrou nínguem

    for(let i = 0; i < time.length; i++){
        let jogador = time[i]; // Pega o jogador do array time, na posição i, e armazena na variável jogador

        if(jogador.nome === nomeJogador){ // Verifica se o nome do jogador é igual ao nome digitado pelo usuário
            console.log(" JOGADOR ENCONTRADO! ");
            console.log("Jogador encontrado: " + jogador.nome + " | Função: " + jogador.funcao + " | Pontuação: " + jogador.pontuacao);
            
            encontrou = true;
            break; // Sai do loop, pois já encontrou o jogador
    }

}
    if(!encontrou){ // Se não encontrou nenhum jogador com o nome digitado pelo usuário, ele vai mostrar a mensagem abaixo
        console.log("Jogador não encontrado.");
    }

}

// Função para atualizar a pontuação do jogador, caso ele tenha jogado uma partida e queira atualizar sua pontuação
function atualizacaoPontuacao(){
    let nomeJogador = prompt("Digite o nome do jogador que deseja atualizar a pontuação: ").trim();

    console.log("Buscando por: " + nomeJogador + "...");
    let encontrou = false;

    for(let i = 0; i < time.length; i++){
        
        let jogador = time[i];

        // CORREÇÃO: Adicionado tratamento toLowerCase() e .trim() para garantir o acerto
        if(nomeJogador.toLowerCase() === jogador.nome.toLowerCase()){
            let atualizarPontuacao = Number(prompt("Digite a quantidade de pontos a somar: "));

            if(isNaN(atualizarPontuacao)){
                console.log("Valor inválido.");
                return;
            }

            jogador.pontuacao = jogador.pontuacao + atualizarPontuacao; 
            console.log("Pontuação atualizada com sucesso!");
            console.log(`Nova pontuação de ${jogador.nome}: ${jogador.pontuacao}`);
            encontrou = true;
            return;
        }
    }

    if(!encontrou){
        console.log("Jogador não encontrado.");
    }
}

while(continuar === true) {

    mostrarOpcoes();// mostra as opções para o usuário - Também chamando a opção de mostrarOpcoes() que está no início do código

    let opcao = prompt("Digite sua opção: ");

    if(opcao === "1"){
        cadastrarJogador();
    } else if(opcao === "2"){
        deletarJogador();
    }  else if(opcao === "3"){ 
        mostraEquipe();
    }
     else if(opcao === "4"){
        calcularMedia();
     }
     else if(opcao === "5"){
        atualizacaoPontuacao();
    }
     else if(opcao === "6"){
        buscarJogador();
    }
     else if(opcao === "7"){
        continuar = false;
    } else {
        console.log("Opção inválida, digite outra opção... ");
    }
}

// let numero1 = Number(prompt("Digite um número: "));
// let numero2 = Number(prompt("Digite outro número: "));

// function somaNumero(numero1, numero2){
//     return numero1 + numero2;
// }

// console.log(somaNumero(numero1, numero2)); //5