// Contextos léxicos = escopo
const saudacao = "Opa" // contexto léxico

function exec(){
    const saudacao = "Eae meu consagrado" // contexto léxico 2
    return saudacao
}

// Objetos são grupos aninhados de pares nome/valor

const pessoa = {
    nome: "Alan",
    idade: 28,
    endereco: {
        bairro: "Cachoeira do Bom Jesus",
        cidade: "Florianópolis"
    }
}

console.log(saudacao)
console.log()
console.log(exec())
console.log()
console.log(pessoa)