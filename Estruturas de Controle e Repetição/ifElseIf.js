Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim
}

const imprimirResultado = function (nota) {
    if (nota.entre(9, 10)) {
        console.log("Parabéns campeão, sua nota foi", nota)
    }
    else if (nota.entre(7, 8.99)) {
        console.log("Aprovado meu consagrado! Sua nota foi", nota)
    }
    else if (nota.entre(4, 6.99)) {
        console.log("Xii meu parça, você está de recuperação. Sua nota foi", nota)
    }
    else if (nota.entre(0, 3.99)) {
        console.log("Ai é sem condições meu aliado, você está reprovado. Sua nota foi", nota)
    }
    else {
        console.log("Peraí meu irmão, você está digitando uma nota de 0 a 10? Pelo jeito não né seu abobado, olha o que você digitou: ", nota)
    }
}

imprimirResultado(10)
imprimirResultado(7.9)
imprimirResultado(6.5)
imprimirResultado(1.2)
imprimirResultado(11)