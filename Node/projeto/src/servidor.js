const porta = 3003;
const express = require('express');
const bancoDeDados = require('./bancoDeDados');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/produtos', (req, res, next) => {
  res.send(bancoDeDados.getProdutos()); // converte para JSON
});

app.get('/produtos/:id', (req, res, next) => {
  res.send(bancoDeDados.getProduto(req.params.id));
});

app.delete('/produtos/:id', (req, res, next) => {
  res.send(bancoDeDados.deletarProduto(req.params.id));
});

app.post('/produtos', (req, res, next) => {
  const produto = bancoDeDados.salvarProduto({
    nome: req.body.nome,
    preco: req.body.preco,
  });

  res.send(produto);
});

app.put('/produtos/', (req, res, next) => {
  const produto = bancoDeDados.salvarProduto({
    id: req.body.id,
    nome: req.body.nome,
    preco: req.body.preco,
  });

  res.send(produto);
});

app.listen(porta, () => {
  console.log(`Servidor executando na porta ${porta}.`);
});
