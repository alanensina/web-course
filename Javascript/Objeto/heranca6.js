function Aula(nome, videoID) {
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula("Bem vindo", 123)
const aula2 = new Aula("Até breve", 456)

console.log(aula1, aula2)

// Simulando o new:
function novo(f, ...params){ // Ao colocar o ... dentro dos parâmetros, ele receberá vários parâmetros e concatenará em um array
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj,params)
    return obj
}

const aula3 = novo(Aula, "Bem vindo novamente",789)
const aula4 = novo(Aula, "Nos vemos em breve",101112)
console.log(aula3, aula4)