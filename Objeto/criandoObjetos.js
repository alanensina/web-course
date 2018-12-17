// usando a notação literal
const obj1 = {}
console.log(obj1)

// Object em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

// Funções construtoras
function Produto(nome, preco, desc) {
    this.nome = nome // Apenas esse atributo está público

    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto("Caneta", 7.99, 0.15)
const p2 = new Produto("Notebook", 1999.90, 0.2)
console.log(p1.getPrecoComDesconto(), "Preço do produto 1")
console.log(p2.getPrecoComDesconto(), "Preço do produto 2")

// Função Factory
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome, salarioBase, faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario("João", 5500, 3)
const f2 = criarFuncionario("Maria", 8500, 1)

console.log(f1.getSalario(), "-> Funcionário 1")
console.log(f2.getSalario(), "-> Funcionário 2")

// Object.create
const filha = Object.create(null)
filha.nome = "Ana"
console.log(filha)

// Criando objetos através de uma função JSON
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)