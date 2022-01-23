const recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
];

module.exports = function handleFoodWithId(req, res) {
  const { id } = req.params;

  const recipe = recipes.find((r) => r.id === parseInt(id));

  if(!recipe) return res.status(404).json({message: "Error, we don't have this food."});

  return res.status(200).json(recipe);
}