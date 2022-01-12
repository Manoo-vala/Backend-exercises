const fs = require('fs').promises;

const newPhrase = 'Oxiris, eu sou eu e licuri é coco pequeno!';

fs.writeFile('./meu-arquivo.txt', newPhrase)
  .then(() => {
    console.log('Arquivo escrito com sucesso!');
  })
  .catch((err) => {
    console.error(`Erro ao escrever o arquivo: ${err.message}`);
  });