// Armazenando uma função dentro de uma variável
const imprimirSoma = function (a, b) {
    console.log(a + b)
}

imprimirSoma(6, 7)

/*
Armazenando uma função arrow em uma variável
=> Significa Arrow Function
*/
const soma = (a, b) => {
    return a + b
}
console.log(soma(9,7))

// Retorno implícito
const subtracao = (a, b) => a - b
console.log(subtracao(9,2))

const imprimir = a => console.log(a)
imprimir("Alan Ensina")