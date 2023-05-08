function getPreco(imposto=0, moeda='R$'){
    return `${moeda} ${this.preço *(1 - this.desc) * (1+imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4598,
    desc: 0.15,
    getPreco
}

global.preco = 20
global.desc = 0.1
console.log(getPreco())
console.log(produto.getPreco())