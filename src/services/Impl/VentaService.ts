import { Dulce } from "../../models/Dulce";
import { Venta } from "../../models/Venta";
import { IVentas } from "../IVenta";

export class VentaService <T extends Venta> implements IVentas{
  private ventas:Venta [] = [];
  private dulce:Dulce;
  addVenta(venta:T): void{
      this.ventas.push(venta);
  }
  mostrarVentasTotales(): void {
      console.log(`VENTAS: 
        ${JSON.stringify(this.ventas)}`);
  }
  mostrarVentasProducto(idProducto:number): void {
      console.log(this.ventas.map((item) => item._idDulce));
  }
}
