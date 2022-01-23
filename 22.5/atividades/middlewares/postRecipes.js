const recipes = require('../API/recipes.json');

module.exports = function handlePostRecipes(req, res) {
  const { id, name, price, waitTime } = req.body;
  recipes.push({ id, name, price, waitTime});
  res.status(201).json({ message: 'Recipe created successfully!'});
};
