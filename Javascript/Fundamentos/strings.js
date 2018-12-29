const escola = "Universidade Federal de Santa Catarina"

// Retorna o caracter que se encontra na posição desejada
console.log(escola.charAt(2))

// Retorna o código da tabela UNICODE
console.log(escola.charCodeAt(2))

// Retorna o 1º índice da letra desejada
console.log(escola.indexOf("a"))

/*
Substring
Ele começa a leitura da string 
conforme o índice indicado
*/
console.log(escola.substring(4))

console.log(escola.substring(0,5)) // Com range determinado

// Concatenação de strings
console.log("Eu estudo na ".concat(escola).concat(" desde 2016"))

// Divide a string e armazena em um array
console.log("Alan, Vinicius, Cezar, Ensina".split(', '))