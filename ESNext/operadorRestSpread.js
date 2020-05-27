// operador ... rest(juntar)/spread(espalhar)
// usar rest como parâmetro de função

// usar spread como objeto
const funcionario = {
  nome: 'Jeremias',
  salario: 4999.75
}
const clone = {ativo: true, ...funcionario}
console.log(clone)

// usar spread com array
const grupoA = ['Pedro', 'Maria', 'José']
const grupoFinal = ['Jonas', 'Julia', ...grupoA, 'Joana']
console.log(grupoFinal)