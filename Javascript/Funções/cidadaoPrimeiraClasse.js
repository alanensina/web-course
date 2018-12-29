// Função em JS é First-Class Object (Citiziens)
// Higher-order function

// Forma literal:
function fun1() {
    // Implementação
}

// Armazenar função em uma variável:
// Para chamar a função basta chamar o nome da variável juntamente do ()
const fun2 = function () {
    // Implementação
}

// Armazenar uma função em um array:
const array = [function (a, b) { return a + b }, fun1, fun2]
console.log(array[0](2, 3))

// Armazenar uma função em um objeto:
const obj = {}
obj.falar = function () { return "E aí meu consagrado!" }
console.log(obj.falar())

// Passar função como parâmetro
function run(fun) {
    fun()
}

run(function () { console.log("Executando...") })

// Função retornando/contendo uma função
function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}

soma(10, 5)(8)
// ou...
const resultado = soma(10, 5)
resultado(8)