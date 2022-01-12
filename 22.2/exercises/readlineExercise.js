const fs = require('fs').promises;
const readline = require('readline');

const readFiles = async (nameFile) => {

  const message = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve, reject) => {
    message.question(nameFile, (answer) => {
      message.close();
      resolve(answer)
    })
  })
}

async function start() {
  const fileName = await readFiles('Digite o caminho do arquivo');
  try {
    const fileContent = await readfile(fileName, 'utf-8');
    console.log(fileContent);
  } catch (err) {
    console.log('Arquivo inexistente');
  }
}

start();
