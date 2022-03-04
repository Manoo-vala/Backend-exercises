// Exercício 3 : Utilizando as enums criadas nos exercícios anteriores e o pacote readline-sync , que cria uma interface para ler o que for inserido no console (mais informações, veja a documentação ), crie um programa que quando a pessoa usuária escolher o mês do ano e o hemisfério no terminal:

import { keyInSelect } from 'readline-sync';
import { climate } from './Climas';
// import { Months } from './Meses';


const findYourClimate = keyInSelect(climate, "Descubra o clima", {cancel: 'SAIR'});
