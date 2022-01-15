const express = require('express');
const bodyParse = require('body-parser');

const handlePing = require('./middlewares/ping');

const app = express();

app.get('/ping', handlePing);

app.listen(3001, () => {
  console.log('Tudo certo por aqui.');
});
