import { IMaquina } from "../services/IMaquina";
import { Dulce } from "./Dulce";
type Saldo = "1" | "2" | "5" | "10" | "20" | "50" | "100";

export class Maquina implements IMaquina{
    private dulces: Dulce[] = [];
    private ingreso: number = 0;
    private ventaTotal:number = 0;

    constructor(dulces:Dulce[]){
        this.dulces = dulces;
    }

    mostrarArticulos(): void {
        this.dulces.forEach((dulce, index) => {
            console.log(`${index + 1}. Nombre: ${dulce._nombre} | Precio: ${dulce._precio} | Unidades: ${dulce._stock}`)
        });
    }

    venderArticulo(numero: number):void {
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
        } else {
            console.log(
                `Saldo insuficiente. ${dulce.getNombre()} cuesta $${dulce.getPrecio()}, pero tienes $${this.ingreso}`
            );
        }
    }

    mostrarIngreso():void {
        console.log(`Te quedan: $${this.ingreso}`);
    }

    mostrarVentaTotal():void{
        console.log(`Venta total: $${this.ventaTotal}`);
    }

    mostrarVentaPorProducto():void{
        console.log("\n======Ventas por producto======");
        this.dulces.forEach((item, index) => {
            console.log(`${index + 1}. ${item.getNombre()} - Vendidos: ${item.getVendidos()}`);
        });
    }

    agregarSaldo(saldo: number) {
        if (saldo <= 0) {
            console.log("Ingresa una cantidad valida");
            return;
        }
        this.ingreso += saldo;
        console.log(`Has insertado $${saldo}. Saldo actual: $${this.ingreso}`)
    }

    devolverCambio(): void {
        console.log(`Cambio devuelto: $${this.ingreso}`);
        this.ingreso = 0;
    }

}