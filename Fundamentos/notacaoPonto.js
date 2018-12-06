const obj1 = {}
obj1.nome = "Cotonete"

function Obj(nome){
    this.nome = nome
    this.exec = function(){
        console.log("Objeto criado com sucesso.")
    }
}

const obj2 = new Obj("Barbeador")
const obj3 = new Obj("Desodorante")

console.log(obj1, obj2, obj3)

obj2.exec()
obj3.exec()
