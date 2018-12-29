/*
A principal diferença de call e apply é a forma que você passa os parâmetros.
*/

function getPreco(imposto = 0, moeda = "R$") {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: "PS4",
    preco: 2500,
    desc: 0.15,
    getPreco
}

global.preco = 2500
global.desc = 0.1
console.log(getPreco())
console.log(produto.getPreco())

const carro = {
    preco: 15000, desc: 0.2
}

// Os parametros são passados no call/apply 
console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))
console.log(getPreco.call(carro, 0.15, "EURO"))
console.log(getPreco.apply(global, [0.3, "Libra"]))