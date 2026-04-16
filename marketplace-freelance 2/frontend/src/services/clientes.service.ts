import { apiGet, apiPost, apiPut, apiDelete } from '@/lib/api';
import type { Cliente } from '@/interfaces/cliente.interface';

export const clientesService = {
  findAll: () => apiGet<Cliente[]>('/clientes'),
  findOne: (id: number) => apiGet<Cliente>(`/clientes/${id}`),
  create: (data: Omit<Cliente, 'id' | 'createdAt' | 'updatedAt'>) =>
    apiPost<Cliente>('/clientes', data),
  update: (id: number, data: Partial<Omit<Cliente, 'id' | 'createdAt' | 'updatedAt'>>) =>
    apiPut<Cliente>(`/clientes/${id}`, data),
  remove: (id: number) => apiDelete(`/clientes/${id}`),
};
