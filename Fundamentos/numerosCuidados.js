// Em JavaScript, determinadas contas que o resultado seja infinito, resultará Infinity
console.log(7 / 0)

/*
Também é possível realizar operações com strings, 
porém deve-se tomar cuidado pois se dentro da string 
possuir mais de um número ou letras o retorno será NaN
*/
console.log("10" / 2) 
console.log("10 s" / 2)
console.log("10 15" / 2)

/*
Operações com ponto flutuante não possuem 100% de precisão, 
pois devido a processamento, para atingir 100% o tempo de processamento 
seria mais lento.
Segue o padrão IEEE
*/
console.log(0.7 + 0.1) // Resultado 0.7999999999999999

/*
As functions de Number não são possíveis ser chamadas diretamente do literal, 
apenas dentro de parênteses.

console.log(10.toString()) -> ERRADO
*/
console.log((10.8321).toFixed(2)) // -> CERTO