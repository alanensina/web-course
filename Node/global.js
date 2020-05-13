// console.log(global)

// Freeze para congelar o objeto e não permitir alteração em outros locais
global.MinhaApp = Object.freeze({
  saudacao() {
    return 'Estou visível em todos os lugares'
  },
  nome: 'Variável global'
})