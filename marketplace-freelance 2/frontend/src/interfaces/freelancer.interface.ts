import type { Habilidad } from './habilidad.interface';

export interface Freelancer {
  id: number;
  nombres: string;
  apellidos: string;
  documentoIdentidad: string;
  correoElectronico: string;
  telefono?: string;
  descripcionPerfil: string;
  portfolioUrl?: string;
  habilidades: Habilidad[];
  createdAt: string;
  updatedAt: string;
}
