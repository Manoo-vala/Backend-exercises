const recipes = require('../API/recipes.json');

module.exports = function validadePrice(req, res, next) {
  const { price } = req.body;
  const { id } = req.params;

  if(!((price || id) && (price > 0 || id > 0) && (typeof price === "number" || typeof id === "number"))) return res.status(400).json({message: 'Invalid number!'});

  next();
};