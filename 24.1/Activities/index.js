const express = require('express');
const bodyParser = require('body-parser');
const BookRoute = require('./routes');

const app = express();
app.use(bodyParser.json());
app.use('/books', BookRoute);


app.listen(3000, () => console.log('Ouvindo na porta 3000'));
