import { Cd } from "./clasesBase/cd.js";
import { DiscoDuro } from "./clasesBase/discoDuro.js";

const cd = new Cd("CD Música", 4.7);
cd.girarDisco();
cd.almacenarDatos ("Canción 1");
console.log(cd.leerDatos());
console.log(cd.reportarInformacion());

const hdd = new DiscoDuro("Disco C",512);
hdd.girarDisco();
hdd.almacenarDatos("Entregable 3.ts");
console.log(hdd.leerDatos());
hdd.formatear();
console.log(hdd.reportarInformacion());
