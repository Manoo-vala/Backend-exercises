const recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
];

module.exports = function handleSearchFood(req, res) {
  const {name , maxPrice} = req.query;
  const filteredRecipes = recipes
  .filter((recipe) => recipe.name.includes(name) && recipe.price < maxPrice);

  if(!filteredRecipes) return res.status(404).json({message: 'Okay, essa comida não tá por aqui.'});
  return res.status(200).json(filteredRecipes);
}