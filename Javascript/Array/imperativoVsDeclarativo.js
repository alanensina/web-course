const alunos = [
    { nome: "João", nota: 7.9 },
    { nome: "Maria", nota: 9.2 },
    { nome: "Pedro", nota: 7.1 },
    { nome: "Bia", nota: 8.4 }
]

/*
 Imperativo:
    É o modo de escrever o código de uma maneira que mostra como é feito passo a passo de uma determinada ação, ou seja, tudo fica explícito.
    Uma de suas desvantagens é o reuso de código
 */
let total1 = 0
for (let i = 0; i < alunos.length; i++) {
    total1 += alunos[i].nota
}

console.log(total1 / alunos.length) // Média da nota dos alunos

/*
 Declarativo:
    É uma forma de escrever o código de maneira mais abstrata, onde você não precisa saber o passo a passo de uma determinada ação, mas sim saber o que vai ser feito e não como vai ser feito.
    Uma de suas vantagens é o reuso de código, pois serão várias funções já prontas que podem ser reusadas em outra parte do código.
*/
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual
const total2 = alunos.map(getNota).reduce(soma)

console.log(total2 / alunos.length)