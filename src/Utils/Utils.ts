import * as readlineSync from "readline-sync";
import { Maquina } from "../models/Maquina";
import { Dulce } from "../models/Dulce";

// Instanciar algunos dulces con stock
const inventario: Dulce[] = [];
const chicle = new Dulce(1, "Chicle Fresa", 5, 3, "Trident");
const caramelo = new Dulce(2, "Caramelo Menta", 3, 2, "Ricola");
const galletas = new Dulce(3, "Galleta Oreo", 10, 1, "Gamesa");

inventario.push(chicle, caramelo, galletas);

// Crear máquina con los dulces
const maquina = new Maquina(inventario);

function mostrarMenu() {
    console.log("\n===== MÁQUINA EXPENDEDORA DE DULCES =====");
    console.log("1. Mostrar dulces");
    console.log("2. Insertar dinero");
    console.log("3. Comprar dulce");
    console.log("4. Ver saldo actual");
    console.log("5. Devolver cambio");
    console.log("6. Venta total");
    console.log("7. Salir");
    console.log("=========================================");
}

function iniciarMenu() {
    let opcion: string;

    do {
        mostrarMenu();
        opcion = readlineSync.question("Selecciona una opción: ");

        switch (opcion) {
            case "1":
                maquina.mostrarArticulos();
                break;

            case "2":
                const dinero = parseInt(readlineSync.question("Ingresa dinero (solo números): "));
                maquina.agregarSaldo(dinero);
                break;

            case "3":
                maquina.mostrarArticulos();
                const seleccion = parseInt(readlineSync.question("¿Qué dulce quieres comprar? (número): "));
                maquina.venderArticulo(seleccion);
                break;

            case "4":
                maquina.mostrarIngreso();
                break;

            case "5":
                maquina.devolverCambio();
                break;

            case "6":
                maquina.mostrarVentaTotal();
                break;

            case "7":
                console.log("Gracias por usar la máquina expendedora. ¡Hasta luego!");
                break;

            default:
                console.log("Opción inválida. Intenta de nuevo.");
                break;
        }
    } while (opcion !== "7");
}

export { inventario, mostrarMenu, iniciarMenu }