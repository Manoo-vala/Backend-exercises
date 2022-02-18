import { question, questionInt } from 'readline-sync';

export function convert(valor: number, unidadeBase: string, unidadeParaConversao: string): number {
  const units = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'];

  const indexUnitBase = units.indexOf(unidadeBase);
  const indexUnitToConversion = units.indexOf(unidadeParaConversao);
  const exponent = indexUnitToConversion - indexUnitBase;

  return valor * Math.pow(10, exponent);
};

export function exec(): void {
  const value = questionInt('Qual valor que você quer converter ?');
  const unityBase = question('Qual a unidade que este número pertence ?');
  const unityToConversion = question('Qual a unidade que deseja converter ?');

  console.log(convert(value, unityBase, unityToConversion));
};

exec();
