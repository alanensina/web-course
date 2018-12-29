/*
JSON é um formato de textual dados, ou seja,
armazena apenas atributos e não funções. 
Ele pode ser utilizado em praticamente todas as 
linguagens de programação.
*/

const obj = {
    a: 1,
    b: 2,
    c: 3,
    soma() {
        return a + b + c
    }
}
// Objeto para JSON:
console.log(JSON.stringify(obj)) // Note que a função foi excluída.

// JSON para Objeto:
const obj2 = JSON.parse(`{"a": 14, "b": 31, "c": 42}`) // JSON só reconhece o nome dos atributos dentro de àspas duplas.
console.log(obj2)

// JSON também reconhece Strings, booleanos e objetos/arrays internos
const obj3 = JSON.parse(`{"a": 14.98, "b": "Claudinho", "c": true, "d": {}, "e": []}`)
console.log(obj3) 