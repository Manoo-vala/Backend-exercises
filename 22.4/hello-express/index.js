const express = require('express');
const app = express();
const handleFood = require('./middlewares/recipes');
const handleDrink = require('./middlewares/drinks');
const handleFoodWithId = require('./middlewares/recipesWithId');
const handleDrinkWithId = require('./middlewares/drinksWithId');
const handleSearchDrink = require('./middlewares/drinksSearch');
const handleSearchFood = require('./middlewares/recipesSearch');

app.get('/recipes', handleFood);

app.get('/recipes/search', handleSearchFood);

app.get('/recipes/:id', handleFoodWithId);

app.get('/drinks', handleDrink);

app.get('/drinks/search', handleSearchDrink);

app.get('/drinks/:id', handleDrinkWithId);

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});