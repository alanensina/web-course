// Como o VAR não possui escopo de bloco, a variável criada dentro do for ela continua fora do escopo
for (var i = 0; i < 10; i++) {
    console.log(i)
}

console.log("i = ", i)
