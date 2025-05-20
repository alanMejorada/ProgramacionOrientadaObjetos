import {IDulce} from "../services/IDulce"
export class Dulce implements IDulce{
    _id:number;
    _nombre:string;
    _precio:number;
    _stock:number;
    _marca:string;
    private _vendidos:number = 0;

    constructor(id:number, nombre:string, precio:number, stock:number, marca:string){
        this._id = id;
        this._nombre = nombre;
        this._precio = precio;
        this._stock = stock;
        this._marca = marca;
    }
    getUnidades():number {
        return this._stock;
    }
    restarUnidad():void{
        this._stock--;
        this._vendidos++;
    }
    getNombre(){
        return this._nombre;
    }
    getPrecio(){
        return this._precio;
    }
    getVendidos(){
        return this._vendidos;
    }
}