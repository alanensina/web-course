// Funções anônimas são funções sem nome
const soma = function (a, b) {
    return a + b
}

const imprimirResultado = function (a, b, operacao = soma) {
    console.log(operacao(a, b))
}

imprimirResultado(3, 4)
imprimirResultado(6, 8, soma)
imprimirResultado(7, 9, function (x, y) {
    return x * y
}) // Função anônima no parâmetro
imprimirResultado(8,2, (z,y) => z/y) // Arrow function anônima