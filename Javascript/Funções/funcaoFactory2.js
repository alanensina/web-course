// Resposta do desafio proposto na aula funcaoFactory1.js
function criarProduto(nome, preco){
    return {
        nome, preco, desconto: 0.1
    }
}

console.log(criarProduto("iPad", 1500))
console.log(criarProduto("TV", 3500))
console.log(criarProduto("Iphone", 4500))