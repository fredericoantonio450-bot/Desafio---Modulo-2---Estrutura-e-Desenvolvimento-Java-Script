// Objeto em JavaScript

const carrinho1 = {
    cor: "vermelho",
    tamanho: "grande", // Propriedade do objeto 

    andar(){
        return(`o carrinho ${this.cor} estar é andando`) // Método do objeto 
    }
}

const carrinho2 = {
    cor: "verde",
    tamanho: "pequeno",
    andar(){
        return(`o carrinho ${this.cor} estar é andando`)
    }
}

console.log(carrinho1.andar());
console.log(carrinho2.andar());