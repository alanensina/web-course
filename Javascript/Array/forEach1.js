const aprovados = ["Agatha", "Aldo", "Bruna", "José"]

aprovados.forEach(function(nome, indice){
    console.log(`${indice +1}) ${nome}`)
})

aprovados.forEach(nome => console.log(nome))

const exibirAprovados = aprovados => console.log(aprovados)
aprovados.forEach(exibirAprovados)