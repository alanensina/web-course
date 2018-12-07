const pessoa = {
    saudacao: "Bom dia",
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()

const falar = pessoa.falar
// Nesse caso ele não diz a saudação pois o contexto é diferente
falar() // Conflito de paradigmas: OO e funcional

// Para resolver o problema acima, deve-se utilizar o bind para que ele possa "amarrar" o objeto com o contexto específico.
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()