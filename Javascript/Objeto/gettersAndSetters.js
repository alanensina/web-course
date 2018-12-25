// OBS: JS não suporta sobrecarga de métodos exceto em getters and setters
const sequencia = {
    _valor: 1, // _ antes do atributo, por convenção significa é pretendida ser acessada apenas internamente dentro desse objeto 
    get valor() { return this._valor++ },
    set valor(valor) {
        if (valor > this._valor) {
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900 // Será ignorado por ser menor que 1000
console.log(sequencia.valor, sequencia.valor)