"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Chetos = void 0;
const Dulce_1 = require("./Dulce");
class Chetos extends Dulce_1.Dulce {
    constructor(id, nombre, precio, stock, marca, esPicante) {
        super(id, nombre, precio, stock, marca);
        this._esPicante = esPicante;
    }
}
exports.Chetos = Chetos;
