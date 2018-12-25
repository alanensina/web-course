// O this dentro de uma função arrow ele é FIXO e não varia de contexto. Essa é uma das vantagens do arrow function

function Pessoa() {
    this.idade = 0
    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new Pessoa