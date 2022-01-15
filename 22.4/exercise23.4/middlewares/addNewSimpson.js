const simpsonsUtils = require('../utils/fs-utils');

module.exports = async function handleNewSimpson(req, res) {
  const {id, name} = req.body;

  const simpsons = await simpsonsUtils.getSimpsons();

  if (simpsons.map(({ id }) => id).includes(id)) {
    return res.status(409).json({ message: 'id already exists' });
  }

  await simpsons.push({ id, name });

  await simpsonsUtils.setSimpsons(simpsons);

  res.status(204).end();
}
