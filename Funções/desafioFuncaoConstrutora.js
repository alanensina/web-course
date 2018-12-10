/*
Desafio:
Pegar o primeiro exemplo da aula classVsFactory.js e fazer o construtor como uma função.
*/
function Pessoa(nome) {
    this.nome = nome

    this.falar = function () {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa("Alan")
p1.falar()