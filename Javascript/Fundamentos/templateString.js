const nome = "Alan"
const sobrenome = "Ensina"
const universidade = "UFSC"
const curso = "Sistemas de Informação"
const idade = 28
const cidade = "Limeira/SP"

const template = `Olá, meu nome é ${nome} ${sobrenome}. Eu tenho ${idade} anos e sou natural de ${cidade}. Atualmente eu estudo ${curso} na ${universidade}.`
console.log(template)

// Expressões
// Tabuada do 7
console.log(`
Tabuada do 7:
0 x 7 = ${0*7}
1 x 7 = ${1*7} 
2 x 7 = ${2*7} 
3 x 7 = ${3*7} 
4 x 7 = ${4*7} 
5 x 7 = ${5*7} 
6 x 7 = ${6*7} 
7 x 7 = ${7*7} 
8 x 7 = ${8*7} 
9 x 7 = ${9*7} 
10 x 7 = ${10*7} 
`)

// Uso de funções em template string
const up = texto => texto.toUpperCase() // Texto todo com letras maíusculas
console.log(up("estou com fome...")) // com texto simples
console.log(`Eii garoto ${up("cuidado!")} Você pode se machucar.`) // com template simples
console.log(up(template)) // com template declarado