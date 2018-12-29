const a = 1
const b = 2
const c = 3

const obj1 = { a: a, b: b, c: c } // Antes criava-se objeto delegando um nome para o atributo

const obj2 = { a, b, c } // Hoje não é mais necessario

console.log(obj1)
console.log(obj2)

// Outras maneiras de criar atributo definindo nome/valor com notação literal
const nomeAtributo = "nota"
const valorAtributo = 8.72
const obj3 = {}
obj3[nomeAtributo] = valorAtributo
console.log(obj3)

const obj4 = { [nomeAtributo]: valorAtributo }
console.log(obj4)

// Duas maneiras de definir uma função dentro de um objeto.
const obj5 = {
    funcao1: function () {
        // ...
    },
    funcao2() {
        // ...
    }
}