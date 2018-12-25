console.log("01)", "1" == 1) // O resultado é true pois ele não verifica o tipo e sim o valor
console.log("02)", "1" === 1) // O resultado é false pois os tipos são diferentes
console.log("03)", "2" != 2) // O resultado é true pois ele não verifica o tipo e sim o valor
console.log("04)", "2" !== 2) // O resultado é false pois os tipos são diferentes 
console.log("05)", 1 === 2) // O resultado é false pois por mais que o tipo seja igual, os valores são diferentes

/*
Para comparações relacionais de VALOR utiliza-se o '=='
Para comparações relacionais de VALOR e TIPO utiliza-se o '==='
*/

console.log("06)", 3 > 2) // true, pois 3 é maior que 2
console.log("07)", 3 < 2) // false, pois 3 não é menor que 2
console.log("08)", 3 >= 2) // true, pois 3 é maior que 2
console.log("09)", 3 <= 2) // false, pois 3 não é menor que 2

const d1 = new Date(0)
const d2 = new Date(0)
console.log("10)", d1 === d2) // É false pois são 2 objetos e possuem referências diferentes na memória
console.log("11)", d1.getTime() === d2.getTime()) // É true pois nesse caso esse método busca um number, e a comparação é válida.

console.log("12)", null == undefined) // true
console.log("13)", null === undefined) // false

//Obs: por via de regra é melhor utilizar o '===' para comparações mais precisas.

