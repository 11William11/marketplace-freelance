import { apiGet, apiPost, apiPut, apiDelete } from '@/lib/api';
import type { CategoriaServicio } from '@/interfaces/categoria-servicio.interface';

export const categoriasService = {
  findAll: () => apiGet<CategoriaServicio[]>('/categorias'),
  findOne: (id: number) => apiGet<CategoriaServicio>(`/categorias/${id}`),
  create: (data: { nombre: string; descripcion?: string }) =>
    apiPost<CategoriaServicio>('/categorias', data),
  update: (id: number, data: Partial<{ nombre: string; descripcion?: string }>) =>
    apiPut<CategoriaServicio>(`/categorias/${id}`, data),
  remove: (id: number) => apiDelete(`/categorias/${id}`),
};
