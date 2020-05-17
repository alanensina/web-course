const fs = require('fs');

const produto = {
  nome: 'Celular',
  valor: 1235.99,
  desconto: 0.5,
};

fs.writeFile(
  __dirname + '/arquivoGerado.json',
  JSON.stringify(produto),
  (erro) => {
    console.log(erro || 'Arquivo salvo com sucesso!');
  }
);
