const readline = require('readline-sync');

const peso = readline.questionFloat('Qual seu peso ?');
const altura = readline.questionFloat('Qual sua altura ?');


const calcIMC = (peso, altura) => {
  let imc;
  if (altura > 100) {
    console.log(peso / (altura * 2 / 100));
      imc = peso / (altura * 2 / 100);
    return imc;
  }
  console.log(peso / (altura * 2))
    imc = peso / (altura * 2)
  return imc;
};
const resultIMC = (imc) => {
  if (imc < 18.5) {
   return console.log('Abaixo do peso (magreza)');
  }
  if(imc >= 18.5 &&  imc <= 24.9) {
    return console.log('Peso normal');
  }
  if(imc >= 25 && imc <= 29.9) {
    return console.log('Acima do peso (sobrepeso)');
  }
  if(imc >= 30 && imc <= 34.9) {
    return console.log('Obesidade grau I');
  }
  if(imc >= 35 && imc <= 39.9) {
    return console.log('Obesidade grau II');
  }
  if(imc >= 40) {
    return console.log('Obesidade graus III e IV');
  }
};

calcIMC(peso, altura);
resultIMC(calcIMC(peso, altura));

module.exports = calcIMC;
module.exports = resultIMC;