var numero = 1

{
    var numero = 2
    console.log("Dentro do escopo " , numero)
}

console.log("Fora do escopo ", numero)

/*
Variáveis com var utilizam escopos globais e podem ser declaradas mais que uma vez
Como boa prática de programação, deve-se evitar variáveis globais.
*/