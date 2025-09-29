import { DiscoBase } from "./DiscoBase.js";

export class Cd extends DiscoBase { // extends para heredar de DiscoBase
    constructor(nombre: string, capacidadGB: number, rpm = 200) {
        super(nombre, capacidadGB, "CD", rpm) //super -> para llamar a los metodos comunes del constructor del padre
    }

    almacenarDatos(tipoDeDato: string): void {
        this.contenido.push(`[láser] ${tipoDeDato}`);
        console.log(`CD: dato almacenado con láser,  ${tipoDeDato}`);
    }

    leerDatos(): string[] {
        console.log("CD: leyendo datos con láser");
        return this.contenido;
    }        
}