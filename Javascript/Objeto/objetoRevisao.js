// Coleção dinâmica de pares chaves/valor

const produto = new Object
produto.nome = "Cadeira"
produto["Marca do produto"] = "Genérica"
produto.preco = 220

console.log(produto)

// Deletando atributos
delete produto.preco
delete produto["Marca do produto"]
console.log(produto)

const carro = {
    modelo: "A4",
    valor: 90000,
    proprietario: {
        nome: "Geraldo",
        idade: 59,
        endereco: {
            rua: "Rua da Ilusão",
            numero: 11
        }
    },
    condutores: [{
        nome: "Juninho",
        idade: 19
    }, {
        nome: "Alice",
        idade: 18
    }],
    calcularValorSeguro: function () {
        // ...
    }
}

carro.proprietario.endereco.numero = 17

delete carro.calcularValorSeguro
console.log(carro)