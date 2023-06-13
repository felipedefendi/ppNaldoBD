const mongoose = require('./db');

// Definição do modelo de Produto
const produtoSchema = new mongoose.Schema({
  nome: String,
  descricao: String,
  preco: Number,
  estoque: Number,
});

const Produto = mongoose.model('Produto', produtoSchema);

// Definição do modelo de Usuário
const usuarioSchema = new mongoose.Schema({
  nome: String,
  email: String,
  senha: String,
  informacoesEntrega: String,
});

const Usuario = mongoose.model('Usuario', usuarioSchema);

// Definição do modelo de Pedido
const pedidoSchema = new mongoose.Schema({
  id: String,
  produtos: [produtoSchema],
  total: Number,
  informacoesEntrega: String,
  status: String,
});

const Pedido = mongoose.model('Pedido', pedidoSchema);

// Definição do modelo de Avaliação
const avaliacaoSchema = new mongoose.Schema({
  id: String,
  produto: String,
  classificacao: Number,
  comentarios: String,
});

const Avaliacao = mongoose.model('Avaliacao', avaliacaoSchema);

module.exports = { Produto, Usuario, Pedido, Avaliacao };