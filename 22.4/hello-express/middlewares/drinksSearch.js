const drinks = [
  { id: 1, name: 'Refrigerante Lata', price: 5.0 },
  { id: 2, name: 'Refrigerante 600ml', price: 8.0 },
  { id: 3, name: 'Suco 300ml', price: 4.0 },
  { id: 4, name: 'Suco 1l', price: 10.0 },
  { id: 5, name: 'Cerveja Lata', price: 4.5 },
  { id: 6, name: 'Água Mineral 500 ml', price: 5.0 },
];

module.exports = function handleSearchDrink(req, res) {
  const {name, maxPrice, minPrice} = req.query;
  const filteredDrinks = drinks
  .filter((drink) => drink.name.includes(name) 
    && drink.price < parseInt(maxPrice) 
    && drink.price > parseInt(minPrice));

    if(!filteredDrinks) return res.status(404).json({message: 'Desculpe, não temos essa bebida'})
    return res.status(200).json(filteredDrinks);
}