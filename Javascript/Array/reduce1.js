// No reduce, ele pega os elementos do array e vai acumulando com o outro elemento conforme a operação que você determinou na função de callback.

// Exemplo 1:
const alunos = [
    { nome: "Joaquin", nota: 7.3, bolsista: false },
    { nome: "Maria", nota: 8.9, bolsista: false },
    { nome: "Carlos", nota: 9.1, bolsista: true },
    { nome: "Ana", nota: 9.5, bolsista: true }
]

const resultado = alunos.map(a => a.nota).reduce(function (acumulador, atual) {
    // console.log(acumulador, atual)
    return acumulador + atual
})

console.log(resultado)

// Exemplo 2:
const nums = [1, 2, 4, 8, 16, 32, 64, 128]

const somatorio = nums.reduce(function (acumulador, atual) {
    return acumulador + atual
})
console.log(somatorio)