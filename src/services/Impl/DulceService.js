"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DulceService = void 0;
class DulceService {
    constructor() {
        this.dulces = [];
    }
    comprarDulce(dulce) {
        const index = this.dulces.findIndex((item) => { item._id === dulce._id; });
        this.dulces[index]._stock - 1;
        this.verificarStock(dulce._id);
    }
    verificarStock(id) {
        const index = this.dulces.findIndex((item) => { item._id === id; });
        console.log(`El stock de ${this.dulces[index]._nombre} es de : ${this.dulces[index]._stock}`);
    }
    getTipo(id) {
        console.log(this.dulces.map((item) => item._id));
    }
}
exports.DulceService = DulceService;
