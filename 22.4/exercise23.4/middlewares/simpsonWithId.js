const simpsonsUtils = require('../utils/fs-utils');

module.exports = async function handleSimpsonsId(req, res) {
  const { id } = req.params;

  const simpsons = await simpsonsUtils.getSimpsons();

  const filterSimpson = simpsons.find((simpson) => `${simpson.id}` === id);

  if (!filterSimpson) return res.status(404).json({message: 'simpson not found'});
  return res.status(200).json(await filterSimpson);
};
