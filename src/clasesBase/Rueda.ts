import { IDiscoGira } from "../interfaces/IDiscoGira.js";

export class Rueda implements IDiscoGira {
  nombre: string;
  material: string;
  rpm: number;

  constructor(nombre: string, material: string, rpm = 300) {
    this.nombre = nombre;
    this.material = material;
    this.rpm = rpm;
  }

  girarDisco(): void {
    console.log(`La rueda ${this.nombre} de ${this.material} está girando a ${this.rpm} RPM...`);
  }

  getVelocidadRPM(): number {
    return this.rpm;
  }
}
