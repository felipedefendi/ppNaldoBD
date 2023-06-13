const mongoose = require('mongoose');

// Conexão com o banco de dados MongoDB
mongoose.connect('mongodb://localhost/e-comerce', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Verifica se a conexão foi estabelecida com sucesso
mongoose.connection.on('connected', () => {
  console.log('Conexão ao banco de dados estabelecida com sucesso');
});

// Captura de erros na conexão com o banco de dados
mongoose.connection.on('error', (err) => {
  console.error('Erro ao conectar ao banco de dados:', err);
});

module.exports = mongoose;
