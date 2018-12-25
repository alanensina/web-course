const peso1 = 1.0
const peso2 = Number("2.0")

console.log(peso1,peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))
console.log("-----------------------")

const avaliacao1 = 9.654
const avaliacao2 = 7.887

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)
console.log("Nota da avaliação 1: " + avaliacao1 + ", o peso dessa nota é " + peso1)
console.log("Nota da avaliação 2: " + avaliacao2 + ", o peso dessa nota é " + peso2)
console.log("Portanto, a média final é: " + media.toFixed(2)) // Média com duas casas decimais.
console.log("-----------------------")

// Convertendo um number em uma string
let mediaString = media.toString()
console.log(mediaString)
console.log(typeof mediaString)
console.log("-----------------------")

// Convertendo um number em uma string binária
let mediaString2 = media.toString(2)
console.log(mediaString2)
console.log(typeof mediaString2)
console.log("-----------------------")