const carrinho = [
    '{"nome": "Borracha", "valor": 3.45}',
    '{"nome": "Caderno", "valor": 13.90}',
    '{"nome": "Kit de lápis", "valor": 41.22}',
    '{"nome": "Caneta", "valor": 7.50}'
]

// Retornar um array apenas com os preços
const paraObjeto = json => JSON.parse(json) // Parse do JSON
const apenasValor = produto => produto.valor // Getter do valor

const resultado = carrinho.map(paraObjeto).map(apenasValor)
console.log(resultado)