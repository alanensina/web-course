function soBoaNoticia(nota) {
    if (nota >= 7) {
        console.log("Aprovado com a nota:", nota)
    }
}

soBoaNoticia(8)
soBoaNoticia(6)

function seForVerdadeEuFalo(valor) {
    if (valor) {
        console.log("É verdade:", valor)
    }
}
// Valores false
seForVerdadeEuFalo()
seForVerdadeEuFalo(null)
seForVerdadeEuFalo("")
seForVerdadeEuFalo(0)
seForVerdadeEuFalo(false)

// Valores true
seForVerdadeEuFalo([])
seForVerdadeEuFalo(true)
seForVerdadeEuFalo(" ")
seForVerdadeEuFalo(-1)