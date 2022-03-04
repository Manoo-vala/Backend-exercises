"use strict";
// Exercício 3 : Utilizando as enums criadas nos exercícios anteriores e o pacote readline-sync , que cria uma interface para ler o que for inserido no console (mais informações, veja a documentação ), crie um programa que quando a pessoa usuária escolher o mês do ano e o hemisfério no terminal:
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = require("readline-sync");
const Climas_1 = require("./Climas");
// import { Months } from './Meses';
const findYourClimate = (0, readline_sync_1.keyInSelect)(Climas_1.climate, "Descubra o clima", { cancel: 'SAIR' });
