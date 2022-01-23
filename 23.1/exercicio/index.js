const express = require('express');
const bodyParser = require('body-parser');
const middlewares = require('./middlewares');

const app = express();
app.use(bodyParser.json());

app.post('/user', middlewares.createUser);

app.use(middlewares.error);

app.listen(3000, () => {
  console.log('Ouvindo a porta 3000');
})
