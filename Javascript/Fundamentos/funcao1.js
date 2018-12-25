// Função sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(5, 7)
// Resulta 12

/*
Quando não se especifica um ou mais valores por parâmetro, 
o JavaScript utiliza-se do undefinied, sendo assim resulta um NaN.
*/
imprimirSoma(4)
imprimirSoma()

/*
Caso coloque mais que a quantidade delimitada de parâmetros, 
utiliza-se apenas os primeiros e o restante ele ignora.
*/
imprimirSoma(2, 11, 5, 7, 9, 12, 423)
console.log()

/*
Função com retorno

PS: Nova funcionalidade do ECMAScript 2015 
permite que caso você não dê um valor para o parâmetro de entrada, 
você pode definir um valor padrão.
*/
function soma(a, b = 0) {
    return a + b
}

console.log(soma(3, 8))
console.log(soma(8))

