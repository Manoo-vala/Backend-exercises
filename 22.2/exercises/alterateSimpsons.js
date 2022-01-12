const fs = require('fs').promises;


const deleteSimpsons = async () => {
  const searchSimpson = await fs
  .readFile('./Simpsons.json', 'utf-8')
  .then((content) => JSON.parse(content));
  
  const deleteSimpson = searchSimpson.filter(({id}) =>  id !== '10' && id !== '6');

  const writeNewList = await fs.writeFile('./Simpsons.json', JSON.stringify(deleteSimpson))

   return console.log(writeNewList);
}

const restoreSimpsons = [
  {
    "id": "1",
    "name": "Homer Simpson"
  },
  {
    "id": "2",
    "name": "Marge Simpson"
  },
  {
    "id": "3",
    "name": "Bart Simpson"
  },
  {
    "id": "4",
    "name": "Lisa Simpson"
  },
  {
    "id": "5",
    "name": "Maggie Simpson"
  },
  {
    "id": "6",
    "name": "Ned Flanders"
  },
  {
    "id": "7",
    "name": "Montgomery Burns"
  },
  {
    "id": "8",
    "name": "Nelson Muntz"
  },
  {
    "id": "9",
    "name": "Krusty"
  },
  {
    "id": "10",
    "name": "Milhouse Van Houten"
  }
];
const simpsonFamilyID = [1, 2, 3, 4]

const restoreSimpsonJson = async () => {
  fs.writeFile('./Simpsons.json', JSON.stringify(restoreSimpsons))
}

const createFamilyJson = async () => {
  const doc = await fs
   .readFile('./Simpsons.json', 'utf-8')
   .then((content) => JSON.parse(content));

   const filterFamily = doc.filter(({id}) => ['1', '2', '3', '4'].includes(id));

  await fs.writeFile('./simpsonFamily.json', JSON.stringify(filterFamily));
}

const includeNelson = async () => {
  const doc = await fs
   .readFile('./Simpsons.json', 'utf-8')
   .then((content) => JSON.parse(content));

   const filterFamily = doc.filter(({id}) => ['1', '2', '3', '4', '8'].includes(id));

  await fs.writeFile('./simpsonFamily.json', JSON.stringify(filterFamily));
}

const MaggieTurnBack = async () => {
  const doc = await fs
   .readFile('./Simpsons.json', 'utf-8')
   .then((content) => JSON.parse(content));

   const filterFamily = doc.filter(({id}) => ['1', '2', '3', '4', '5'].includes(id));

  await fs.writeFile('./simpsonFamily.json', JSON.stringify(filterFamily));
} 

// createFamilyJson();
// deleteSimpsons();
// restoreSimpsonJson();
// includeNelson();
MaggieTurnBack();
