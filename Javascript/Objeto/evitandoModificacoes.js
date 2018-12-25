// Object.preventExtensions -> previne que seja adicionado novos objetos/atributos

const produto = Object.preventExtensions({
    nome: "Qualquer", preco: 1.99, tag: "Promoção"
})
console.log(produto)
console.log("Extensível: ", Object.isExtensible(produto)) // Verifica se o Objeto é extensivel

produto.nome = "Borracha"
produto.descricao = "Borracha escolar branca" // Como não é extensível, não irá adicionar esse atributo
delete produto.tag
console.log(produto)

// Object.seal
const pessoa = { nome: "Alan", idade: 28 }
Object.seal(pessoa) // Após selar, não se pode add/deletar atributos, apenas modificá-los
console.log("Selado: ", Object.isSealed(pessoa))
pessoa.nome = "Quincas Borba"
delete pessoa.idade
pessoa.nascionalidade = "Brasileiro"
console.log(pessoa) // Só pode modificar o valor dos atributos, porém não foi possível adicionar ou deletar qualquer um dos atributos.

// Object.freeze
const carro = { modelo: "Celtinha", valor: 12000 }
Object.freeze(carro) // Após o objeto congelado, não se pode adicionar/deletar/modificar os atributos, ou seja, seus atributos são constantes.
console.log("Congelado: ", Object.isFrozen(carro))
carro.ano = 2010
carro.modelo = "Palio"
delete carro.valor
console.log(carro)