import { Dulce } from "../../models/Dulce";
import { IDulce } from "../IDulce";

export class DulceService <T extends Dulce> implements IDulce{
    private dulces:Dulce[] = [];
    comprarDulce(dulce:T): void {
        const index = this.dulces.findIndex((item)=>{ item._id === dulce._id });
        this.dulces[index]._stock - 1;
        this.verificarStock(dulce._id);
    }
    verificarStock(id:number): void {
        const index = this.dulces.findIndex((item)=>{ item._id === id });
        console.log(`El stock de ${this.dulces[index]._nombre} es de : ${this.dulces[index]._stock}`);
    }
    getTipo(id:number):void{
        console.log(this.dulces.map((item) => item._id));
    }
    
}