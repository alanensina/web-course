// Destructuring com arrays
const [a] = [10]
console.log(a)

// Arrays pode deixar índices sem nenhum valor e ficará como undefined
const [n1, , n2, n3, n6, , , n9 = 0] = [2, 5, 6, 8]
console.log(n1, n2, n3, n6, n9)

const [, [, nota]] = [[, 8, 9], [9, 7, 10]]
console.log(nota)