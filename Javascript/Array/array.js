console.log(typeof Array, typeof new Array, typeof [])
/*
Array é uma estrutura heterogênea, ou seja, pode armazenar elementos de tipos diferentes (int, objetos,booleans, etc...)
Porém por boa prática, utiliza-se um array sempre com elementos do mesmo tipo
*/

let aprovados = new Array("Alan", "Bia", "Day", "John")
console.log(aprovados)

aprovados = ["Bia", "John"]
console.log(aprovados[0]) // Bia
console.log(aprovados[1]) // John
console.log(aprovados[2]) // undefined

aprovados[2] = "Jill"
aprovados.push("Mark")
console.log(aprovados)
console.log(aprovados.length) // Tamanho do array
aprovados[10] = "Holmes" // aprovados[4] até aprovados[9] ficam undefineds
console.log(aprovados[4] === undefined) // true

aprovados.sort() // Organiza o array
console.log(aprovados)

delete aprovados[0] // deleta a posição 0 e deixa como undefined
console.log(aprovados)

aprovados.splice(1, 3) // Serve para remover, sendo o primeiro parâmetro o local onde começa a exclusão e o segundo onde termina, ou seja, nesse caso as posições 1, 2 e 3 serão excluídas e não deixará como undefined.
console.log(aprovados)

// Splice para adicionar
aprovados.splice(0,0, "Randy", "Mike") // Primeiro parâmetro é onde inicia o splice, o segundo é quantos elementos irá excluir, e 3º parâmetro em diante são os elementos a serem adicionados.
console.log(aprovados)