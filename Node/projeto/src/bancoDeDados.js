const sequence = {
  __id: 1,
  get id() {
    return this.__id++;
  },
};

const produtos = {};

function salvarProduto(produto) {
  if (!produto.id) produto.id = sequence.id;
  produtos[produto.id] = produto;
  return produto;
}

function getProduto(id) {
  return produtos[id] || {};
}

function getProdutos() {
  return Object.values(produtos);
}

function deletarProduto(id) {
  const produto = produtos[id];
  delete produtos[id];
  return produto;
}

module.exports = {
  salvarProduto,
  getProduto,
  getProdutos,
  deletarProduto,
};
