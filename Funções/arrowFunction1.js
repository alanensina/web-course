// Função normal
let dobro = function (a) {
    return 2 * a
}

// Função arrow
dobro = (a) => {
    return 2 * a
}

// Função arrow para quando a implementação tenha apenas uma linha e o return é implícito
dobro = a => 2 * a

console.log(dobro(Math.PI).toFixed(2))

/*
Toda função arrow precisa-se colocar o indicador de parâmetros, 
até quando a função não recebe nenhum. Deve-se explicitar com '()' ou '_'
*/
ola = () => "Olá"
ola = _ => "Olá"
console.log(ola())


