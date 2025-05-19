import { Dulce } from "./Dulce";

export class Chetos extends Dulce{

    private _esPicante:boolean;

    constructor(id:number, nombre:string, precio:number, stock:number, marca:string, esPicante:boolean){
        super(id, nombre, precio, stock, marca);
        this._esPicante = esPicante;
    }
}