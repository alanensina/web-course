const pessoa = {}
pessoa.nome = "Alan"
pessoa.sobrenome = "Ensina"
pessoa.idade = 28
pessoa["Apelido no FIFA"] = "Ensininha" // Não é uma boa prática utilizar atributo com espaço
console.log(pessoa)
console.log()

const pessoa2 = {
    nome: "Clóvis",
    sobrenome: "Bob Nelson",
    idade: 56,
    FIFA: {
        "Apelido no FIFA": "Clovinelson",
        gols: 78,
        assistencias: 45,
        historico: {
            vitorias: 10,
            empates: 5,
            derrotas: 3
        }
    }
}
console.log(pessoa2)
console.log()

