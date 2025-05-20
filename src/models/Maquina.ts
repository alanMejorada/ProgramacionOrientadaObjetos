import { Dulce } from "./Dulce";

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
        this.ingreso = this.ingreso + dulce.getPrecio();
        console.log(`##### Venta de ${dulce.getNombre()} `);
    }

    mostrarIngreso() {
        console.log(`#### Ventas del dia: ${this.ingreso}`);
    }
}