const imprimitResultado = function (nota) {
    if (nota >= 7) {
        console.log("Aprovado, sua nota:", nota)
    }
    else {
        console.log("Reprovado, sua nota:", nota)
    }
}

imprimitResultado(10)
imprimitResultado(4)
imprimitResultado("Tirei 10 fêssor!") // Como JS é fracamente tipada, ele compara strings com valores numéricos, portanto, cuidado.




