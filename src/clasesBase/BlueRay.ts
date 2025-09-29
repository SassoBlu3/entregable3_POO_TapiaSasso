import { DiscoBase } from "./DiscoBase.js";

export class BlueRay extends DiscoBase { // extends para heredar de DiscoBase
    constructor(nombre: string, capacidadGB: number, rpm = 5000) {
        super(nombre, capacidadGB, "BlueRay", rpm) //super -> para llamar a los metodos comunes del constructor del padre
    }

    almacenarDatos(tipoDeDato: string): void {
        this.contenido.push(`[láser azul] ${tipoDeDato}`);
        console.log(`CD: dato almacenado con láser azul,  ${tipoDeDato}`);
    }

    leerDatos(): string[] {
        console.log("CD: leyendo datos con láser azul");
        return this.contenido;
    }        
}