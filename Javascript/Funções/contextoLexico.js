const valor = "Global"

function minhaFuncao() {
    console.log(valor)
}

function exec() {
    const valor = "Local"
    minhaFuncao()
}

exec()
/*
Ele vai printar Global pois quando o código foi carregado, as funções foram carregadas primeiro com o que está fora do escopo, ou seja,  valor = Global.
Sendo assim, quando executada e se tratando de uma constante, ela não altera.
*/