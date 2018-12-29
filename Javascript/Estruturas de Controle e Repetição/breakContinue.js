const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let x in nums) {
    if (x == 5) {
        break // Interrompe a execução atual e sai do laço
    }
    console.log(`${x} = ${nums[x]}`)
}

for (let y in nums) {
    if (y == 5) {
        continue // Interrompe a execução atual, incrementa e vai para o próximo laço
    }
    console.log(`${y} = ${nums[y]}`)
}

// Rótulo (Label)
// Evite usar, nesses casos é melhor quebrar os laços em métodos/funções.
externo:
for (let a in nums) {
    for (let b in nums) {
        if (a == 2 && b == 3) {
            break externo // Ele pula para o laço externo.
        }
        console.log(`Par = ${a}, ${b}`)
    }
}