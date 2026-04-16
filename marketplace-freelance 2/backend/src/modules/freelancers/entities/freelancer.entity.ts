export class FreelancerEntity {
  id: number;
  nombres: string;
  apellidos: string;
  documentoIdentidad: string;
  correoElectronico: string;
  telefono?: string;
  descripcionPerfil: string;
  portfolioUrl?: string;
  createdAt: Date;
  updatedAt: Date;
}
