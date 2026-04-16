import { apiGet, apiPut } from '@/lib/api';
import type { Proyecto, EstadoProyecto } from '@/interfaces/proyecto.interface';

export const proyectosService = {
  findAll: () => apiGet<Proyecto[]>('/proyectos'),
  findOne: (id: number) => apiGet<Proyecto>(`/proyectos/${id}`),
  updateEstado: (id: number, estado: EstadoProyecto) =>
    apiPut<Proyecto>(`/proyectos/${id}`, { estado }),
};
