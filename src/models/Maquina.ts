import { Dulce } from "./Dulce";
type Saldo = "1" | "2" | "5" | "10" | "20" | "50" | "100";
export class Maquina {
    private dulces: Dulce[] = [];
    private ingreso: number = 0;

    constructor(dulces: Dulce[]) {
        this.dulces = dulces;
    }

    mostrarArticulos(): void {
        this.dulces.forEach((dulce, index) => {
            console.log(`${index + 1}. Nombre: ${dulce._nombre} | Precio: ${dulce._precio} | Unidades: ${dulce._stock}`)
        });
    }

    venderArticulo(numero: number) {
        const dulce = this.dulces[numero - 1];
        dulce.restarUnidad()
        this.ingreso = this.ingreso - dulce.getPrecio();
        console.log(`##### Venta de ${dulce.getNombre()} `);
    }

    mostrarIngreso() {
        console.log(`#### Ventas del dia: ${this.ingreso}`);
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