import { DiscoBase } from "./DiscoBase.js";

export class LP extends DiscoBase { // extends para heredar de DiscoBase
    constructor(nombre: string, capacidadGB: number, rpm = 33) {
        super(nombre, capacidadGB, "LP", rpm) //super -> para llamar a los metodos comunes del constructor del padre
    }

    almacenarDatos(tipoDeDato: string): void {
        this.contenido.push(`[surco] ${tipoDeDato}`);
        console.log(`CD: dato almacenado por surcos físicos,  ${tipoDeDato}`);
    }

    leerDatos(): string[] {
        console.log("CD: leyendo datos con aguja en surcos");
        return this.contenido;
    }        
}