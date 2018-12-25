let a = 3
global.b = 123
this.c = 213
this.d = false
this.e = "Alan"

console.log(a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports)

// NÃO FAZER ISSO:
abc = 321 // Criando variável sem let e var
console.log(global.abc)

/*
Variáveis sem var e let ficam no escopo global do Node, NÃO FAZER ISSO.
*/