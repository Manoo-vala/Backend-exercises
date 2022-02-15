require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const rescue = require('express-rescue');

const app = express();
app.use(bodyParser.json());

app.listen(process.env.PORT, () => console.log(`Ouvindo a porta ${process.env.PORT}}`))