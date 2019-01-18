const alunos = [
    { nome: "Joaquin", nota: 7.3, bolsista: false },
    { nome: "Maria", nota: 8.9, bolsista: false },
    { nome: "Carlos", nota: 9.1, bolsista: true },
    { nome: "Ana", nota: 9.5, bolsista: true }
]

// Desafio 1: Todos os alunos são bolsistas?
const todosBolsistas = (resultado, bolsista) => resultado && bolsista

console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))

// Desafio 2: Algum aluno é bolsista?
const algumBolsista = (resultado, bolsista) => resultado || bolsista

console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))