// concat -> concatena arrays em um novo array
const filhas = ["Valeskah", "Cibalena"]
const filhos = ["Uoxiton", "Uesclei"]
const todos = filhas.concat(filhos)
console.log(todos)

console.log([].concat([1, 2], [3, 4], 5, [[6, 7], [8, 9]]))

const nums = [1, 2, 3, 4, 5]
const letras = ['a', 'b', 'c']
const palavras = ['oi', 'olá', 'tchau']
const tudoMisturado = nums.concat(letras).concat(palavras)
console.log(tudoMisturado)