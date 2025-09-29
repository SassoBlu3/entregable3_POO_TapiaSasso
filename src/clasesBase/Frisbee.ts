import { IDiscoGira } from "../interfaces/IDiscoGira.js";

export class Frisbee implements IDiscoGira {
  nombre: string;
  material: string;
  color: string;
  rpm: number;

  constructor(nombre: string, material: string, color: string, rpm = 300) {
    this.nombre = nombre;
    this.material = material;
    this.color = color;
    this.rpm = rpm;
  }

  girarDisco(): void {
    console.log(`El frisbee ${this.nombre} de ${this.material} de color ${this.color} está girando a ${this.rpm} RPM...`);
  }

  getVelocidadRPM(): number {
    return this.rpm;
  }
}
