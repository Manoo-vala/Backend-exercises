const drinks = [
  { id: 1, name: 'Refrigerante Lata', price: 5.0 },
  { id: 2, name: 'Refrigerante 600ml', price: 8.0 },
  { id: 3, name: 'Suco 300ml', price: 4.0 },
  { id: 4, name: 'Suco 1l', price: 10.0 },
  { id: 5, name: 'Cerveja Lata', price: 4.5 },
  { id: 6, name: 'Água Mineral 500 ml', price: 5.0 },
];
 
module.exports = function handleDrinkWithId(req, res) {
  const { id } = req.params;

  const drink = drinks.find((d) => d.id === parseInt(id));

  if(!drink) return res.status(404).json({message: "Error, we don't have this drink."});
  return res.status(200).json(drink);
}
