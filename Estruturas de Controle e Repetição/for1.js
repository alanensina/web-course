let contador = 1

while (contador <= 10) {
    console.log(contador)
    contador++
}

console.log("Contador após a saída do laço", contador)
console.log()

// Mesmo 'while' com um 'for'
for (let i = 1; i <= 10; i++) {
    console.log(`i = ${i}`)
}

const notas = [7, 5.5, 6.7, 8.5, 10]
for (let i = 0; i < notas.length; i++) {
    console.log(`Nota: ${notas[i]}`)
}

