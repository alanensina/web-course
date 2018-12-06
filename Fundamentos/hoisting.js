console.log("a =", a)
var a = 2
console.log("a =", a)

/*
O Hoisting funciona como um gancho, onde ele pega uma variável ainda não declarada, puxa pra cima,
executa a instrução e depois devolve ela para baixo.
Obs: O Hoisting só funciona com VAR, não funciona com LET.

O código acima é o mesmo que:

var a
console.log("a =", a)
a = 2
console.log("a =", a)

Como boa prática, evite utilizar o hoisting e declare suas variáveis antes.
*/