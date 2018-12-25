let ativo = false
console.log(typeof ativo)
console.log(ativo)

ativo = true
console.log(ativo)

ativo = 1
console.log(!!ativo) // Usa-se a dupla negação para descobrir o valor booleano que se encontra a variável

console.log()
console.log("Valores que recebem true:")
console.log(!!-1)
console.log(!!3)
console.log(!!" ")
console.log(!!"Texto qualquer")
console.log(!![]) // Arrays
console.log(!!{}) // Objetos literal
console.log(!!Infinity)
console.log(!!(ativo = true))

console.log()
console.log("Valores que recebem false:")
console.log(!!(ativo = 0))
console.log(!!"") // Strings vazias
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(ativo = false))

