const recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
];

module.exports = function handleFood (req, res) {
  res.json(recipes.sort((food, food2) => {
    if(food.name < food2.name) {
      return -1;
    }
    if(food.name > food2.name) {
      return 1
    }
    return 0
  }))
};
