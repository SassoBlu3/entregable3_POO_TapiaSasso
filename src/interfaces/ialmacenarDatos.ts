export interface IAlmacenarDatos {
  almacenarDatos(tipoDeDato: string): void;   
  leerDatos(): string[];                 
  formatear(): void;                     
  reportarInformacion(): string;  
}