/*
No caso do Node, o contexto do this é o 'global',
já nos navegadores o contexto do this é o 'window'.
*/
let comparaComThis = function (param) {
    console.log(this === param)
}
comparaComThis(global) // Contexto do Node

// Amarrando o this do objeto com o bind
const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(obj)

/*
O Node trabalha com módulos, nesse caso de função arrow, o this não aponta para o global, mas sim pro módulo em específico 
*/
let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global) // Contexto global do Node = false
comparaComThisArrow(module.exports) // Contexto do módulo = true

// Utilizando o bind dentro de uma função arrow para ver se o this muda de referência

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)
/*
A Arrow Function mantém e a referência ainda é o módulo mesmo com o bind.
*/
comparaComThisArrow(module.exports)