const funcs = []

for (let i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i)
    }
    )
}

funcs[2]()
funcs[8]()

/*
Como em JavaScript o LET em escopo de bloco, ao executar essa função, 
ele imprime corretamente naquele momento, diferente se fosse LET.
*/