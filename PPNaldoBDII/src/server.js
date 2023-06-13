const express = require('express');
const app = express();
const routes = require('./routes');

app.use(express.json());
app.use('/api', routes);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor em execução na porta ${PORT}`);
});