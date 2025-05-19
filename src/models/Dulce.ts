import { IDulce } from "../services/IDulce";

export class Dulce {
    _id:number;
    _nombre:string;
    _precio:number;
    _stock:number;
    _marca:string;

    constructor(id:number, nombre:string, precio:number, stock:number, marca:string){
        this._id = id;
        this._nombre = nombre;
        this._precio = precio;
        this._stock = stock;
        this._marca = marca;
    }
}