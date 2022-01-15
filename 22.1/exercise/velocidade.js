const readline = require('readline-sync');

const velocidade = readline.questionInt('Qual a velocidade ?');
const tempo = readline.questionInt('Em quanto tempo ?');

const velMedia = (distancia, tempo) => {
  return console.log(`Velocidade média de ${distancia / tempo} metros por segundo`);
};

velMedia(velocidade, tempo);
