const imprimirResultado = function (nota) {
    switch (Math.floor(nota)) {
        case 10: case 9:
            console.log("Parabéns campeão, sua nota foi", nota)
            break
        case 8: case 7:
            console.log("Aprovado meu consagrado! Sua nota foi", nota)
            break
        case 6: case 5: case 4:
            console.log("Xii meu parça, você está de recuperação. Sua nota foi", nota)
            break
        case 3: case 2: case 1: case 0:
            console.log("Ai é sem condições meu aliado, você está reprovado. Sua nota foi", nota)
            break
        default:
            console.log("Peraí meu irmão, você está digitando uma nota de 0 a 10? Pelo jeito não né seu abobado, olha o que você digitou: ", nota)
    }
}

imprimirResultado(10)
imprimirResultado(7.9)
imprimirResultado(6.5)
imprimirResultado(1.2)
imprimirResultado(11)
imprimirResultado(-1)