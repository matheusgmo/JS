//Factory Simples
function criarPessoa(){
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

//Exercicio
console.log(criarPessoa())

function criarProduto(nome, preco){
    const desconto = preco * 0.20
    precoFinal = preco - desconto
    return {nome, precoFinal}
}

console.log(criarProduto('chocolate', 5))