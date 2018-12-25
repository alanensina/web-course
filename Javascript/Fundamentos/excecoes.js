function tratarErroELancar(erro) {
    //throw new Error("Não foi possível executar o método imprimirNomeGritado.")
    throw "Não foi possível executar o método imprimirNomeGritado()"
}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase(), "!!!")
    } catch (e){
        tratarErroELancar(e)
    } finally {
        console.log("Fim da execução.")
    }
    
}

const obj = {
    nome: "Juvenal" // nome deveria ser name para que o método não desse erro.
}

console.log(imprimirNomeGritado(obj))