"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var plantsRoute_1 = __importDefault(require("./Routes/plantsRoute"));
var sunnyRoute_1 = __importDefault(require("./Routes/sunnyRoute"));
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/plants', plantsRoute_1.default);
app.use('/sunny', sunnyRoute_1.default);
app.listen(3000, function () {
    console.log('Lanai é gatar sim sim na porta 3000');
});
