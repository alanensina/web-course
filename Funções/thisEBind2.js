// Exemplos de como "amarrar" o this no contexto

// Utilizando o bind:
function Pessoa() {
    this.idade = 0
    setInterval(function () {
        this.idade++
        console.log("Pessoa 1:", this.idade)
    }.bind(this), 1000)
}

new Pessoa

// Exemplo 2 sem o bind e "amarrando" o this em uma constante:
function Pessoa2() {
    this.idade = 0
    const self = this
    setInterval(function () {
        self.idade++
        console.log("Pessoa 2:", self.idade)
    }, 1000)
}

new Pessoa2