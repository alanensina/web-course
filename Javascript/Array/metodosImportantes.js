const pilotos = ["Vettel", "Alonso", "Hamilton", "Massa"]

pilotos.pop() // remove o último elemento do array.
console.log(pilotos)

pilotos.push("Senna") // adiciona um último elemento no array.
console.log(pilotos)

pilotos.shift() // // remove o primeiro elemento do array.
console.log(pilotos)

pilotos.unshift("Schumacher") // // adiciona no primeiro elemento do array.
console.log(pilotos)

// splice pode adicionar/remover elementos

// adicionar
pilotos.splice(2, 0, "Massa", "Bottas")
console.log(pilotos)

// remover
pilotos.splice(3, 1) // removeu um elemento na posição 3 do array.
console.log(pilotos)

const outrosPilotos = pilotos.slice(2) // Cria um novo array com o conteúdo do array conforme a posição dada por parâmetro
console.log(outrosPilotos)

const outrosPilotos2 = pilotos.slice(1, 4) // Cria um novo array com o conteúdo do array conforme a posição dada por parâmetro e o fim dado pelo segundo parâmetro
console.log(outrosPilotos)