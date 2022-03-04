"use strict";
// Exercício 2 : Crie uma enum que represente as estações climáticas do ano.
Object.defineProperty(exports, "__esModule", { value: true });
exports.climate = void 0;
var climate;
(function (climate) {
    climate[climate["Primavera"] = 0] = "Primavera";
    climate[climate["Inverno"] = 1] = "Inverno";
    climate[climate["Outono"] = 2] = "Outono";
    climate[climate["Ver\u00E3o"] = 3] = "Ver\u00E3o";
})(climate = exports.climate || (exports.climate = {}));
