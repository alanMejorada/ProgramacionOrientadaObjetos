"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Maquina = void 0;
class Maquina {
    constructor(dulces) {
        this.dulces = [];
        this.ingreso = 0;
        this.ventaTotal = 0;
        this.dulces = dulces;
    }
    mostrarArticulos() {
        this.dulces.forEach((dulce, index) => {
            console.log(`${index + 1}. Nombre: ${dulce._nombre} | Precio: ${dulce._precio} | Unidades: ${dulce._stock}`);
        });
    }
    venderArticulo(numero) {
        if (numero < 1 || numero > this.dulces.length) {
            console.log("Selección inválida.");
            return;
        }
        const dulce = this.dulces[numero - 1];
        if (dulce.getUnidades() <= 0) {
            console.log(`Lo sentimos, ${dulce.getNombre()} está agotado.`);
            return;
        }
        if (this.ingreso >= dulce.getPrecio()) {
            this.ingreso -= dulce.getPrecio();
            this.ventaTotal += dulce.getPrecio();
            dulce.restarUnidad();
            console.log(`Has comprado un ${dulce.getNombre()}. Saldo restante: $${this.ingreso}`);
        }
        else {
            console.log(`Saldo insuficiente. ${dulce.getNombre()} cuesta $${dulce.getPrecio()}, pero tienes $${this.ingreso}`);
        }
    }
    mostrarIngreso() {
        console.log(`Te quedan: $${this.ingreso}`);
    }
    mostrarVentaTotal() {
        console.log(`Venta total: $${this.ventaTotal}`);
    }
    mostrarVentaPorProducto() {
        console.log("\n======Ventas por producto======");
        this.dulces.forEach((item, index) => {
            console.log(`${index + 1}. ${item.getNombre()} - Vendidos: ${item.getVendidos()}`);
        });
    }
    agregarSaldo(saldo) {
        if (saldo <= 0) {
            console.log("Ingresa una cantidad valida");
            return;
        }
        this.ingreso += saldo;
        console.log(`Has insertado $${saldo}. Saldo actual: $${this.ingreso}`);
    }
    devolverCambio() {
        console.log(`Cambio devuelto: $${this.ingreso}`);
        this.ingreso = 0;
    }
}
exports.Maquina = Maquina;
