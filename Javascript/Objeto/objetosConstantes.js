/*
Pessoa aponta para um endereço de memória.
No caso de objetos, por mais que eu altere o conteúdo deles,
 o endereço de memória ainda continua o mesmo,
 porém o conteúdo do objeto não.
*/
const pessoa = {nome: "João"}
pessoa.nome = "Pedro"
console.log(pessoa)

/* 
Como pessoa já está em um endereço de memória, não há como colocar outro objeto no mesmo endereço, nesse caso daria um erro de compilação.

pessoa = {nome: "Ana"}
console.log(pessoa)
*/

Object.freeze(pessoa) // Bloqueia o objeto para que nao seja alterado e nem incluir um novo atributo.
pessoa.nome = "Maria" // Com isso não é possível alterar o atributo nome.
pessoa.sobrenome = "da Silva" // Nem incluir um novo atributo
delete pessoa.nome // Nem remover atributo.

console.log(pessoa)

// Criando o objeto já "congelado"
const pessoaConstante = Object.freeze({nome: "Maria"})
console.log(pessoaConstante)