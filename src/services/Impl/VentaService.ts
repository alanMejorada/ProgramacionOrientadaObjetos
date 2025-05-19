import { Dulce } from "../../models/Dulce";
import { Venta } from "../../models/Venta";
import { IVentas } from "../IVenta";
import { DulceService } from "./DulceService";

export class VentaService <T extends Venta> implements IVentas{
  private ventas:Venta [] = [];
  private dulceService = new DulceService();
  private dulce:Dulce;
  addVenta(dulce: Dulce, venta:T): void{
      this.ventas.push(venta);
      this.dulceService.seleccionarDulce(dulce);
  }
  mostrarVentasTotales(): void {
      console.log(`VENTAS: 
        ${JSON.stringify(this.ventas)}`);
  }
  mostrarVentasProducto(idProducto:number): void {
      console.log(this.ventas.map((item) => item._idDulce));
  }
}
