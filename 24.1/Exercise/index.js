require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const BooksRouter= require('./Router');

const app = express();
app.use(bodyParser.json());

app.use('/books', BooksRouter);

app.use('/', (err, req, res, next) => {
  console.log(err);
  res.status(500).json({ message: 'Erro desconhecido'})
})

app.listen(process.env.PORT, () => console.log(`Ouvindo a porta ${process.env.PORT}}`))