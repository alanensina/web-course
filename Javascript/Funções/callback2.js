// Vantagem do uso do callback

/*
Exercício: Pegar todos os valores menores que 7 e armazenar em um outro array
*/
const notas = [6.5, 5.4, 7.2, 8.2, 9.3, 6.2, 3.4, 9.8, 6.9]

// Sem callback
const notasBaixas1 = []

for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas1.push(notas[i])
    }
}
console.log(notasBaixas1)

// Com o uso do callback
const notasBaixas2 = notas.filter(function (nota) {
    return nota < 7
})
console.log(notasBaixas2)

// Com uso do callback e função arrow
const notasBaixas3 = notas.filter(notas => notas < 7)
console.log(notasBaixas3)