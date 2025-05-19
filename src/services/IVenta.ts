import { Venta } from "../models/Venta";

export interface IVentas {
    addVenta(venta:Venta):void;
    mostrarVentasTotales(): void;
    mostrarVentasProducto(idProducto:number, venta:Venta): void;
}
