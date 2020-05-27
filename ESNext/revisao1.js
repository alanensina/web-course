// let e const
{
  var a = 2; // escopo global
  let b = 3; // let só é visualizada dentro do bloco
  console.log(b);
}
console.log(a);

// Template String
const produto = 'IPhone';
console.log(`${produto} não é o melhor smartphone do mundo.`);

// Destructuring
const [l, e, ...tras] = 'Alan';
console.log(l, e, tras);

const [x, , y] = [1, 2, 3];
console.log(x, y);

const { nome: n, idade } = { nome: 'Alan', idade: 29 };
console.log(n, idade);
