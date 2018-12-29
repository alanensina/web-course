// Cadeia de protótipo (prototype chain)
Object.prototype.att0 = "A" // Evitar esse tipo de manipulação de dados.
const avo = { att1: "L" }
const pai = { __proto__: avo, att2: "A", att3: "ERROR" }
const filho = { __proto__: pai, att3: "N" }

console.log(filho.att0, filho.att1, filho.att2, filho.att3)
// att3 de pai foi sombreado pelo att3 de filho.

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}KM/h de ${this.velMax}KM/h.`
    }
}

const ferrari = {
    modelo: "F40",
    velMax: 324 // Sombreamento
}

const volvo = {
    modelo: "V40",
    status() {
        return `${this.modelo}: ${super.status()}`
    } // Sombreamento
}

// Outra forma de setar o Pai e o Filho em uma herança
Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari, volvo)
volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(100)
console.log(ferrari.status())