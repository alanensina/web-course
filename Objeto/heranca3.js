const pai = { nome: "Pedro", corCabelo: "preto" }

const filha1 = Object.create(pai)
filha1.nome = "Ana"
console.log(filha1.corCabelo)

const filha2 = Object.create(pai, {
    nome: { value: "Manoela", writable: false, enumerable: true }
})

console.log(filha2.nome)
filha2.nome = "Carla" // Nao pode ser alterado pois foi definido como writable: false
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

// Como descobrir se o atributo do objeto é do próprio objeto ou por herança
for (let key in filha2) {
   filha2.hasOwnProperty(key) ?
   console.log(key) : console.log(`Por herança: ${key}`)
}