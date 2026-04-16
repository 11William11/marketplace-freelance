import { apiGet, apiPost, apiPut, apiDelete } from '@/lib/api';
import type { Servicio } from '@/interfaces/servicio.interface';

export const serviciosService = {
  findAll: () => apiGet<Servicio[]>('/servicios'),
  findOne: (id: number) => apiGet<Servicio>(`/servicios/${id}`),
  findByCategoria: (categoriaId: number) =>
    apiGet<Servicio[]>(`/servicios/categoria/${categoriaId}`),
  findByFreelancer: (freelancerId: number) =>
    apiGet<Servicio[]>(`/servicios/freelancer/${freelancerId}`),
  create: (data: {
    titulo: string; descripcion: string; precio: number;
    tiempoEntregaDias: number; freelancerId: number; categoriaServicioId: number; activo?: boolean;
  }) => apiPost<Servicio>('/servicios', data),
  update: (id: number, data: Partial<{
    titulo: string; descripcion: string; precio: number;
    tiempoEntregaDias: number; categoriaServicioId: number; activo: boolean;
  }>) => apiPut<Servicio>(`/servicios/${id}`, data),
  remove: (id: number) => apiDelete(`/servicios/${id}`),
};
