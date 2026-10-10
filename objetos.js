/// 

let jogadorEstrela = {
    nome: "Fallen", 
    funcao: "Capitao/Atirador",
    pontuacao: 2500,
    estaAtivo: true 
}

// acessando as informações com o uso do ponto(.)
console.log("----Perfil do Atleta----");
console.log("Nome:" + jogadorEstrela.nome);
console.log("Rota de Jogo:" + jogadorEstrela.funcao);

// Podemos até alterar um propriedade específica jogadorEstrela.pontuacao = jogadorEstrela.pontuacao + 100; 
// // adicionando 1000 pontos a pontuação do jogador

jogadorEstrela.pontuacao += 100; // adicionando 100 pontos a pontuação do jogador

console.log("Nova pontuação após a final: " + (jogadorEstrela.pontuacao + 100));