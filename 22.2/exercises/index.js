const fs = require('fs').promises;

const simpleMath = (a, b, c) => {
  return new Promise((resolve, reject) => {
    if (typeof a != 'number' || typeof b != 'number' || typeof c != 'number') {
      reject(new Error("Informe apenas números"))
    }
    const result = (a + b) * c;
    if (result < 50) {
      return reject(new Error("Valor muito baixo"))
    }
    resolve(result);
  });
};

const numbersGenerator = async () => {
  const number1 = Math.floor(Math.random() * 100);
  const number2 = Math.floor(Math.random() * 100);
  const number3 = Math.floor(Math.random() * 100);

  try {
    const result = await simpleMath(number1, number2, number3)
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};



numbersGenerator(); 
