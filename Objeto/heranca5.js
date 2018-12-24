console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

// Criando uma função reverse dentro de prototype de String
String.prototype.reverse = function () {
    return this.split('').reverse().join('')
}

console.log("Escola do Ensininha".reverse())

// Criaando uma função que pega o primeiro elemento do array dentro de prototype de Array
Array.prototype.first = function () {
    return this[0]
}

console.log([1, 46, 23, 65, 32, 12, 65].first())
console.log(["a", "b", "c", "d"].first())

// Sobrescrevendo o método toString (NÃO FAÇA ISSO)
String.prototype.toString = function () {
    return "NÃO FAÇA ISSO!"
}

// No caso o reverse utiliza o toString que foi sobreesrito acima e inverte a String retornada dela.
console.log("Escola do Ensininha".reverse())