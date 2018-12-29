// Novo recurso do ES2015
const pessoa = {
    nome: "Juquinha",
    idade: 6,
    endereco: {
        logradouro: "Rua dos Doces",
        numero: 34
    }
}

/*
O Destructuring (desestruturar) serve para facilitar o retorno de atributos de objetos ou de arrays
para que seja mais fácil o acesso a esses dados.
Funciona como um getter de "getters and setters".
*/

const { nome, idade } = pessoa
console.log(nome, idade)

// Atribuindo através de abreviações
const { nome: n, idade: i } = pessoa
console.log(n, i)

// Caso o atributo não exista, ele virá como undefined, ou como o padrão previamente setado
const { sobrenome: s, estaVivo: v = true } = pessoa
console.log(s, v)

// Caso seja objetos dentro de objetos
const { endereco: { logradouro: l, numero: no, cep: c = null } } = pessoa
console.log(l, no, c)