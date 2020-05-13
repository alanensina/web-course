require('./global')

console.log(MinhaApp.saudacao())

MinhaApp.nome = 'Novo nome' // nome não será alterado pois o objeto está em freeze
console.log(MinhaApp.nome)