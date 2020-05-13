const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

const contadorC = require('./novaInstancia')()
const contadorD = require('./novaInstancia')()

// Instâncias únicas, note que o contador B foi incrementado junto ao A
contadorA.inc()
contadorA.inc()
console.log('Contador A: ' + contadorA.valor)
console.log('Contador B: ' + contadorB.valor)

// Novas instâncias, contador C incrementado e contador D não houve alteração
contadorC.inc()
contadorC.inc()
contadorC.inc()
contadorC.inc()
console.log('Contador C: ' + contadorC.valor)
console.log('Contador D: ' + contadorD.valor)