// Destructuring em funções com arrays
function rand([min = 0, max = 1000]) {
    if (min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([50, 40]))

console.log(rand([480]))
console.log(rand([0, 0]))