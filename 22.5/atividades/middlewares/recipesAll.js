const recipes = require('../API/recipes.json');

module.exports = function allRecipes(req, res) {
  res.status(200).json(recipes);
};