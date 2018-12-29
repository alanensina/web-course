const funcs = []

for (var i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i)
    }
    )
}

funcs[2]()
funcs[8]()

/*
Como em JavaScript o VAR não tem escopo de bloco, ao executar essa função, 
ele imprime como se o i fosse 10, que é o valor final do laço.
*/