// Implementando o método forEach manualmente 
Array.prototype.forEach2 = function(callback){
    for(let i = 0; i < this.length; i++){
        callback(this[i], i, this)
    }
}

const aprovados = ["Agatha", "Aldo", "Bruna", "José"]

aprovados.forEach2(function(nome, indice){
    console.log(`${indice +1}) ${nome}`)
})