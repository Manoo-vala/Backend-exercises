const fs = require('fs').promises;



const allSimpsons = () => {
  fs.readFile('./Simpsons.json', 'utf-8')
   .then((content) => {
    return JSON.parse(content);
  })
   .then((simpson) => {
     return simpson.map(({id, name}) => `${id} - ${name}`);
   })
   .then((strings) => {
     strings.forEach((string) => console.log(string));
   });
}

const callOneSimpson = async (id) => {
  const simpsons = await fs
   .readFile('./Simpsons.json', 'utf-8')
   .then((content) => JSON.parse(content));

   const chosenSimpson = simpsons.find((simpson) => simpson.id == id);
   if(!chosenSimpson) {
     throw new Error('Id não encontrado');
   };
   return console.log(chosenSimpson.name);
}


allSimpsons();
callOneSimpson(1);
