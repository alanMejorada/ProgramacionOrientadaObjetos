"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Paletas = void 0;
const Dulce_1 = require("./Dulce");
class Paletas extends Dulce_1.Dulce {
    constructor(id, nombre, precio, stock, marca, sabor) {
        super(id, nombre, precio, stock, marca);
        this._sabor = sabor;
    }
}
exports.Paletas = Paletas;
