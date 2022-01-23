const express = require('express');
const bodyParser = require('body-parser');

const validadePrice = require('./utils/validadePrice');
const recipesAll = require('./middlewares/recipesAll');
const postRecipes = require('./middlewares/postRecipes');
const putRecipes = require('./middlewares/putRecipes');
const authMiddleware = require('./middlewares/authMiddleware');

const app = express();
app.use(bodyParser.json());
app.use(authMiddleware)




app.get('/recipes', recipesAll);
app.post('/recipes', validadePrice, postRecipes);
app.put('/recipes/:id', validadePrice, putRecipes);

app.listen(3001, () => console.log('Ouvindo a porta 3001'));
