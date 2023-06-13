const express = require('express');
const router = express.Router();
const { Produto, Usuario, Pedido, Avaliacao } = require('../models');

// Rota para criar um novo produto
router.post('/produtos', (req, res) => {
  const novoProduto = new Produto(req.body);
  novoProduto.save((err, produto) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(produto);
    }
  });
});

// Rota para listar todos os produtos
router.get('/produtos', (req, res) => {
  Produto.find({}, (err, produtos) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(produtos);
    }
  });
});

// Rota para criar um novo usuário
router.post('/usuarios', (req, res) => {
  const novoUsuario = new Usuario(req.body);
  novoUsuario.save((err, usuario) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(usuario);
    }
  });
});

// Rota para listar todos os usuários
router.get('/usuarios', (req, res) => {
  Usuario.find({}, (err, usuarios) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(usuarios);
    }
  });
});

// Rotas para os demais documentos (Pedidos e Avaliações) podem ser criadas seguindo o mesmo padrão

module.exports = router;