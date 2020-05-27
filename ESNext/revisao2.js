// Arrow function
const soma = (a, b) => a + b;
console.log(soma(7, 3));

// Arrow function (this)
const lexico1 = () => console.log(this === exports);
const lexico2 = lexico1.bind({});
lexico1();
lexico2();

// Parâmetro default
function log(texto = 'Node') {
  console.log(texto);
}
log();
log('Alan');

// Operador rest
function total(...numeros) {
  let total = 0;
  numeros.forEach((n) => (total += n));
  return console.log(total);
}
total(1, 2, 3, 4, 5);
