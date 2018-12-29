// Faz uma requisição do Express
const express = require("express")
// Instância o express
const app = express()
// Faz uma requisição do body-parser
const bodyParser = require("body-parser")

// Faz o parser do body da requisição, ou seja, reconhece os atributos do objeto
app.use(bodyParser.urlencoded({ extended: true }))

// Método post que redireciona para a página /usuários
app.post("/usuarios", (req, resp) => {
    console.log(req.body)
    resp.send("<h4>Incluído com sucesso.</h4>")
})

app.post("/usuarios/:id", (req, resp) => {
    console.log(req.params.id)
    console.log(req.body)
    resp.send("<h4>Alterado com sucesso.</h4>")
})

// Faz o listen da porta 3003
app.listen(3003)