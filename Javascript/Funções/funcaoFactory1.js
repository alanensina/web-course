// É uma função que retorna um objeto.

function criarPessoa(){
    return {
        nome: "Alan",
        sobrenome: "Ensina",
        idade: 28
    }
}

console.log(criarPessoa())


// Desafio: tentar criar um factory que recebe os valores por parâmetro.
function criarProduto(nome, categoria, preco, desconto = 0.15){
    return {
        nome: nome,
        categoria: categoria,
        preco: preco,
        desconto: desconto
        }
}

console.log(criarProduto("PS4", "Videogame", 2500))
// Desafio feito com sucesso :)