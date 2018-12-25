const pessoa = {
    nome: "Judite",
    idade: 15,
    peso: 40
}

console.log(Object.keys(pessoa)) // Retorna o nome dos atributos

console.log(Object.values(pessoa)) // Retorna apenas o valores dos atributos

console.log(Object.entries(pessoa)) // Retorna atributos e valores atribuídos

// Entries utilizando for each e destructuring
Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

// Definindo as propriedades de cada parâmetro
Object.defineProperty(pessoa, 'dataDeNascimento', {
    enumerable: true, // Será enumerado na lista de chaves de descrição do objeto
    writable: false, // Não aceita ser sobreescrita
    value: "01/01/2019"
})

pessoa.dataDeNascimento = "02/09/2018" // como o writable está false, não permitirá sobreescrever o valor
console.log(pessoa.dataDeNascimento)
console.log(Object.keys(pessoa)) // Data de nascimento é exibido pois está com enumerable true.

// Object.assign (ES 2015)
// Concatena objetos no objeto destino
const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 } // Sobrescreverá o atributo a
const obj = Object.assign(dest, o1, o2)

console.log(obj)

Object.freeze(obj) // Congela os atributos
obj.c = 10
console.log(obj)