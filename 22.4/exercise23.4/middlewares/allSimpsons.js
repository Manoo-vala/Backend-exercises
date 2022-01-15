const fs = require('fs').promises;

const readSimpsonsJson = fs.readFile('./API/simpsons.json', 'utf-8')
   .then((data) => {
     return data;
   });


module.exports = async function handleAllSimp(req, res) {
  res.status(200).json(await readSimpsonsJson);
};
