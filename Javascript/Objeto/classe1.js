// Classe de lançamentos
class Lancamento {
    constructor(nome = "Genérico", valor = 0) {
        this.nome = nome
        this.valor = valor
    }
}

// Classe que administra o ciclo financeiro
class CicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    // Método que adiciona um lançamento em um array
    addLancamento(...lancamentos) {
        lancamentos.forEach(l => this.lancamentos.push(l))
    }

    // Método que faz o somatório de todos os lançamentos adicionados.
    sumario() {
        let valorConsolidado = 0
        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}

// Criando lançamentos
const salario = new Lancamento("Salario", 45000)
const contaDeLuz = new Lancamento("Conta de luz", -220)

// Criando um ciclo financeiro
const contas = new CicloFinanceiro(6, 2018)

// Adicionando os lançamentos no ciclo financeiro.
contas.addLancamento(salario, contaDeLuz)

// Somatório final das contas do ciclo financeiro.
console.log("Seu saldo final é de R$", contas.sumario())