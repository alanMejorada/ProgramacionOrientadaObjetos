export interface IMaquina {
    mostrarArticulos(): void;
    venderArticulo(numero: number):void;
    mostrarIngreso():void;
    mostrarVentaTotal():void;
    mostrarVentaPorProducto():void;
    agregarSaldo(saldo: number):void;
    devolverCambio(): void;
}