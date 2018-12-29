// Exemplos de For/In

// Com array
const notas = [7, 5.5, 6.7, 8.5, 10]
for (let i in notas) {
    console.log("Índice:", i, "Nota:", notas[i])
}

// Com objetos
const pessoa = {
    nome: "Manoel",
    sobrenome: "da Silva",
    idade: 57,
    peso: 60
}

for (let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}

