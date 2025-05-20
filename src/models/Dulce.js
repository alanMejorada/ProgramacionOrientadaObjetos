"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dulce = void 0;
class Dulce {
    constructor(id, nombre, precio, stock, marca) {
        this._id = id;
        this._nombre = nombre;
        this._precio = precio;
        this._stock = stock;
        this._marca = marca;
    }
    getUnidades() {
        return this._stock;
    }
    restarUnidad() {
        this._stock--;
    }
    getNombre() {
        return this._nombre;
    }
    getPrecio() {
        return this._precio;
    }
}
exports.Dulce = Dulce;
