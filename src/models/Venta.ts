export class Venta {
    _idDulce:number;
    _nombreDulce:string;
    _importe:number;
    _numeroDeVenta:number;

    constructor(idDulce:number, importe:number, numeroDeVenta:number){
        this._idDulce = idDulce;
        this._importe = importe;
        this._numeroDeVenta = numeroDeVenta;
    }
}
