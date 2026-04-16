import { apiGet, apiPost, apiPut, apiDelete } from '@/lib/api';
import type { Habilidad } from '@/interfaces/habilidad.interface';

export const habilidadesService = {
  findAll: () => apiGet<Habilidad[]>('/habilidades'),
  findByFreelancer: (freelancerId: number) =>
    apiGet<Habilidad[]>(`/habilidades/freelancer/${freelancerId}`),
  create: (data: { nombre: string; freelancerId: number }) =>
    apiPost<Habilidad>('/habilidades', data),
  update: (id: number, data: { nombre?: string }) =>
    apiPut<Habilidad>(`/habilidades/${id}`, data),
  remove: (id: number) => apiDelete(`/habilidades/${id}`),
};
