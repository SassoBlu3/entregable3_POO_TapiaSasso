import { IAlmacenarDatos } from "../interfaces/ialmacenarDatos.js";
import { IDiscoGira } from "../interfaces/iDiscoGira.js";

export abstract class DiscoBase implements IDiscoGira, IAlmacenarDatos {
    nombre: string;
    capacidadGb: number;
    tipo: string;
    contenido: string[];
    rpm: number;

    constructor (nombre: string, capacidadGb: number, tipo: string, rpm: number) { //no pongo parametro contenido porque el disco empieza vacío
        this.nombre = nombre;
        this.capacidadGb = capacidadGb;
        this.tipo = tipo;
        this.rpm = rpm;
        this.contenido = [];
    } 

    // metodos que todos los discos tienen: girarDisco, getVelocidadRPM, formatear, reportarInformacion
    
    girarDisco(): void {
        console.log(`${this.tipo} gira a ${this.rpm} RPM`);
    }

    getVelocidadRPM(): number {
        return this.rpm
    }

    formatear(): void {
        this.contenido = [];
        console.log(`${this.tipo} formateado. Todo el contenido ha sido borrado`);
    }

    reportarInformacion(): string {
        const usado = this.contenido.length ? this.contenido.join(", ") : "(vacío)";
        return `Nombre: ${this.nombre} | Tipo: ${this.tipo} | Capacidad: ${this.capacidadGb} Gb | Contenido: ${usado}`;
    }
//clases abstract para definir metodos que cada clase hija definirá a su manera: cd->laser, disco dura->magnetico
    abstract almacenarDatos(dato: string): void;
    abstract leerDatos(): string[];
}