const ferrari = {
    modelo: "F40",
    velMax: 324
}

const volvo = {
    modelo: "V40",
    velMax: 200
}

// Acessa o protótipo do objeto (objeto pai)
console.log(ferrari.__proto__)

console.log(ferrari.__proto__ === Object.prototype) 
console.log(volvo.__proto__ === Object.prototype) 
// true


// __proto__ aponta para o objeto pai de um objeto.