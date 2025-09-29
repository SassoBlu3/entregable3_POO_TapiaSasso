import { DiscoBase } from "./DiscoBase.js";

export class DiscoDuro extends DiscoBase {
    constructor(nombre: string, capacidadGB: number, rpm = 7200) {
        super(nombre, capacidadGB, "Disco Duro", rpm);
    }

    almacenarDatos(tipoDeDato: string): void {
        this.contenido.push(`[magnético] ${tipoDeDato}`);
        console.log(`HDD: dato almacenado con cabezal magnético, ${tipoDeDato}`);
    }

    leerDatos(): string[] {
        console.log("HDD: leyendo datos con cabezal magnético");
        return this.contenido;
    }
}