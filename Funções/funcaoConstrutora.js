function Carro(velocidadeMax = 200, delta = 5){
   // Atributo privado
   let velocidadeAtual = 0
   
   // Método públic
   this.acelerar = function(){
       if(velocidadeAtual + delta <= velocidadeMax){
           velocidadeAtual += delta
       } else {
           velocidadeAtual = velocidadeMax
       }
   }

   // Método público
   this.getVelocidadeAtual = function() {
       return velocidadeAtual
   }
}

const uno = new Carro // Quando não se coloca o () os atributos de parâmetro vem com padrão estabelecido
uno.acelerar()
console.log("Velocidade da Uno atualmente:",uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log("Velocidade da Ferrari atualmente:", ferrari.getVelocidadeAtual())