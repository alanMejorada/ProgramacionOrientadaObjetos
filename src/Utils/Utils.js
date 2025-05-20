"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.inventario = void 0;
exports.mostrarMenu = mostrarMenu;
exports.iniciarMenu = iniciarMenu;
const readlineSync = __importStar(require("readline-sync"));
const Maquina_1 = require("../models/Maquina");
const Dulce_1 = require("../models/Dulce");
// Instanciar algunos dulces con stock
const inventario = [];
exports.inventario = inventario;
const chicle = new Dulce_1.Dulce(1, "Chicle Fresa", 5, 3, "Trident");
const caramelo = new Dulce_1.Dulce(2, "Caramelo Menta", 3, 2, "Ricola");
const galletas = new Dulce_1.Dulce(3, "Galleta Oreo", 10, 1, "Gamesa");
inventario.push(chicle, caramelo, galletas);
// Crear máquina con los dulces
const maquina = new Maquina_1.Maquina(inventario);
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
    let opcion;
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
