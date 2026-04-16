export interface Cliente {
  id: number;
  nombres: string;
  apellidos: string;
  documentoIdentidad: string;
  correoElectronico: string;
  telefono?: string;
  empresa?: string;
  createdAt: string;
  updatedAt: string;
}
