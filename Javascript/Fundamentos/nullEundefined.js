let valor // Não inicializada
console.log(valor) // undefined

valor = null // Ausência de valor
console.log(valor) // null

const produto = {}
console.log(produto.valor)

produto.valor = 5.60
console.log(produto.valor)

produto.valor = undefined
console.log(produto.valor)
console.log(produto)
