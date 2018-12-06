console.log(typeof Object) // function
console.log(typeof new Object) // object

const Produto = function(){} 
console.log(typeof Produto) // function
console.log(typeof new Produto) // object

class Cliente {}
console.log(typeof Cliente) // function
console.log(typeof new Cliente) // object

/*
Um objeto só será objeto assim que instanciado, antes disso ele é uma função
*/