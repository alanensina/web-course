/*
Em JS também é possível declarar uma função que não recebe nenhum parâmetro, 
porém caso receba ele conseguirá manipular esses dados de entrada 
e realizar a instrução desejada.
Nesse caso utiliza-se o arguments, que é um array que armazena esses dados de entrada.

Exemplo:
*/
function soma(){
    let soma = 0

    for(let i in arguments){
        soma += arguments[i]
    }

    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(1,2,3,4))
console.log(soma(312,1,23,123,324,432))
console.log(soma("teste",12,432))