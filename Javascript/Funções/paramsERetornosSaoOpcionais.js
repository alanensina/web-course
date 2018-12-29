/*
Parâmetros de entrada de funções e retorno de funções são opcionais.
No caso de retorno, há a possibilidade de em alguns casos ele retornar algo e outros não.
Quando não há retorno explícito, o retorno é undefined.

Exemplo:
*/
function area(largura, altura) {
    const area = largura * altura
    if (area > 20) {
    // Retorna undefined
        console.log(`Valor acima do permitido: ${area}m²`)
    }
    else {
        return area
    }
}

console.log(area(2,2))
console.log(area(2))
console.log(area())
console.log(area(21,433,21,54,90))