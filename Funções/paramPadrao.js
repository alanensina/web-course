// Valor padrão do ES2015
function soma3(a = 1, b = 1, c = 1) {
    return console.log(a + b + c)
}

console.log("Utilizando estratégia do ES2015:")
soma3()
soma3(3)
soma3(1, 2, 3)
soma3(0, 0, 0)
console.log()

/*
Estratégias antigas utilizadas em JS:

Estratégia 1 para gerar valor padrão, porém pode causar alguns erros:
*/
function soma1(a, b, c) {
    a = a || 1
    b = b || 1
    c = c || 1
    return console.log(a + b + c)
}

console.log("Utilizando estratégia 1 do JS:")
soma1()
soma1(3)
soma1(2, 3, 6)
soma1(0, 0, 0) // Nesse caso a estratégia não daria certo.
console.log()

// Estrategia 2, 3 e 4 para gerar valor padrão:
function soma2(a, b, c) {
    a = a !== undefined ? a : 1 // Utiliza-se o operador ternário
    b = 1 in arguments ? b : 1 // Utiliza-se a posição dentro do array de arguments juntamente do operador ternário caso não tenha valor em arguments
    c = isNaN(c) ? 1 : c // Verifica se o valor passado por parâmetro é um number, caso não seja ele utiliza como padrão 1.

    return console.log(a + b + c)
}

console.log("Utilizando estratégia 2, 3 e 4 do JS:")
soma2()
soma2(3)
soma2(1, 2, 3)
soma2(0, 0, 0)