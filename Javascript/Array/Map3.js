// Criando o Map manualmente
Array.prototype.map2 = function (callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}

const carrinho = [
    '{"nome": "Borracha", "valor": 3.45}',
    '{"nome": "Caderno", "valor": 13.90}',
    '{"nome": "Kit de lápis", "valor": 41.22}',
    '{"nome": "Caneta", "valor": 7.50}'
]

// Retornar um array apenas com os preços
const paraObjeto = json => JSON.parse(json) // Parse do JSON
const apenasValor = produto => produto.valor // Getter do valor

const resultado = carrinho.map2(paraObjeto).map2(apenasValor)
console.log(resultado)