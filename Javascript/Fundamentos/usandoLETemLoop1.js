/*
Como o LET possui escopo de bloco, a variável criada dentro do for ela não consegue ser visualizada fora do escopo.
*/

for (let i = 0; i < 10; i++) {
    console.log(i)
}

/*
Caso eu tentar imprimir o valor de i fora do escopo teremos o erro:
ReferenceError: i is not defined
*/
// console.log("i = ", i)