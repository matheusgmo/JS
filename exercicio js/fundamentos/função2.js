// Armazenando Função em Variavel

const imprimirSoma = function (a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)

// Armazenando uma Função Arrow em uma Variavel

const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 3))

// Retorno Implícito

const subtração = (a, b) => a - b

console.log(subtração(3, 2))