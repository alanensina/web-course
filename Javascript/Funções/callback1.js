// Callback são funções que chamam outras funções durante sua execução.
const fabricantes = ["Mercedez", "Ferrari", "Audi", "Chevrolet", "BMW"]

function imprimir(nome, indice) {
    console.log(`${indice + 1}, ${nome}`)
}

fabricantes.forEach(imprimir)

fabricantes.forEach(fabricantes => console.log(fabricantes))