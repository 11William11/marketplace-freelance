import type { Freelancer } from './freelancer.interface';
import type { CategoriaServicio } from './categoria-servicio.interface';

export interface Servicio {
  id: number;
  titulo: string;
  descripcion: string;
  precio: number;
  tiempoEntregaDias: number;
  activo: boolean;
  freelancerId: number;
  categoriaServicioId: number;
  freelancer: Freelancer;
  categoriaServicio: CategoriaServicio;
  createdAt: string;
  updatedAt: string;
}
