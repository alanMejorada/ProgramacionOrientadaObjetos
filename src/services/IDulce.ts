import { Dulce } from "../models/Dulce";

export interface IDulce {
    comprarDulce(id:Dulce):void;
    verificarStock(id:number):void;
    getTipo(fondos:number, dulce:Dulce):void;
}