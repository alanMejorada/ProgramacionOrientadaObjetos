import { Dulce } from "../models/Dulce";

export interface IDulce {
    seleccionarDulce(id:Dulce):void;
    verificarStock(id:number):void;
    calcularFondos(fondos:number, dulce:Dulce):void;
}