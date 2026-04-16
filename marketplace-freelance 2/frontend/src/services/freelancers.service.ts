import { apiGet, apiPost, apiPut, apiDelete } from '@/lib/api';
import type { Freelancer } from '@/interfaces/freelancer.interface';

export const freelancersService = {
  findAll: () => apiGet<Freelancer[]>('/freelancers'),
  findOne: (id: number) => apiGet<Freelancer>(`/freelancers/${id}`),
  create: (data: Omit<Freelancer, 'id' | 'habilidades' | 'createdAt' | 'updatedAt'>) =>
    apiPost<Freelancer>('/freelancers', data),
  update: (id: number, data: Partial<Omit<Freelancer, 'id' | 'habilidades' | 'createdAt' | 'updatedAt'>>) =>
    apiPut<Freelancer>(`/freelancers/${id}`, data),
  remove: (id: number) => apiDelete(`/freelancers/${id}`),
};
