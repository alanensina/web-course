const valores = [4.5, 23.5, 432.0, 7.3]
console.log(valores[0], valores[3])

/*
Caso acesse um índice maior que o tamanho do array, isso não dará um erro como em Java, 
mas sim resultara em undefined
*/
console.log(valores[4])

// Também é possível alocar um valor em um índice distante e deixara uma lacuna no array
valores[15] = 765
console.log(valores)

// Esses índices vazios também são contados no tamanho total do array
console.log(valores.length)

/*
Sempre que inseridos novos valores, eles irão para o fim do array
Obs: O array é uma estrutura heterogênia em JavaScript, ou seja, aceita diversos tipos de dados
no mesmo array, porém não é uma boa prática misturar tipos dentro do mesmo array
*/
valores.push("Alan", {id:11}, false)
console.log(valores)

/*
O array funciona como se fosse uma pilha, ou seja, o útlimo a entrar é o primeiro a sair.
Para inserir utilizamos o método .push(), onde ele irá inserir no final do array, no caso de 
retirar o último valor, deve-se retirar utilizando o método .pop()
*/
valores.pop() // irá retirar o false
console.log(valores)
console.log()

// Caso queira tirar uma posição específica:

delete valores[0] // Deletará o 4.5 e deixará a posição como empty
console.log(valores)

console.log(typeof valores) // Arrays são do tipo object
