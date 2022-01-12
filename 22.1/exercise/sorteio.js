const readline = require('readline-sync');

const numeroAposta = readline.questionInt('Qual número você acha que será sorteado ?');

const sorteio = () => {
  const numeroSorteio = Math.floor(Math.random() * 11);
  if (numeroAposta == numeroSorteio) {
    return console.log('Parabéns, numero correto!');
  } else {
    return console.log(`Opa, não foi dessa vez. O número era ${numeroSorteio}`);
  }
};

const tryAgain = () => {
  const ask = readline.question('Deseja jogar novamente ?');
  if ( ask == 'Sim' || ask == 'sim' || ask == 's' || ask == 'yes' || ask == 'Yes') {
    sorteio();
  }
}

sorteio();
tryAgain();
