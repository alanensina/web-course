class Pessoa {
    constructor(nome) {
        this.nome = nome
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa("Alan")
p1.falar()

// Esse caso não precisa usar o this pois ele tem ciência do contexto léxico em que foi declarado.
const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = criarPessoa("Ensininha")
p2.falar()