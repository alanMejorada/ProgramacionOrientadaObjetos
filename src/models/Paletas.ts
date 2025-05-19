import { Dulce } from "./Dulce";

export class Paletas extends Dulce{
    private _sabor:string;

    constructor (id:number, nombre:string, precio:number, stock:number, marca:string, sabor:string){
        super(id, nombre, precio, stock, marca);
        this._sabor = sabor;
    }
}