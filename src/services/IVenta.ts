import { Dulce } from "../models/Dulce";
import { Venta } from "../models/Venta";

export interface IVentas {
    addVenta(dulce:Dulce,venta:Venta):void;
    mostrarVentasTotales(): void;
    mostrarVentasProducto(idProducto:number, venta:Venta): void;
}
