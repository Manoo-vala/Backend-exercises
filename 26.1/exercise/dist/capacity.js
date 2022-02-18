"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exec = exports.convert = void 0;
const readline_sync_1 = require("readline-sync");
function convert(valor, unidadeBase, unidadeParaConversao) {
    const units = ['kl', 'hl', 'dal', 'l', 'dl', 'cl', 'ml'];
    const indexUnitBase = units.indexOf(unidadeBase);
    const indexUnitToConversion = units.indexOf(unidadeParaConversao);
    const exponent = indexUnitToConversion - indexUnitBase;
    return valor * Math.pow(10, exponent);
}
exports.convert = convert;
;
function exec() {
    const value = (0, readline_sync_1.questionInt)('Qual valor que você quer converter ?');
    const unityBase = (0, readline_sync_1.question)('Qual a unidade que este número pertence ?');
    const unityToConversion = (0, readline_sync_1.question)('Qual a unidade que deseja converter ?');
    console.log(convert(value, unityBase, unityToConversion));
}
exports.exec = exec;
;
exec();
