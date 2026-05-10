import { apiGet, apiPost, apiPut, apiDelete } from '@/lib/api';
import type { Solicitud, EstadoSolicitud } from '@/interfaces/solicitud.interface';

export const solicitudesService = {
  findAll: () => apiGet<Solicitud[]>('/solicitudes'),
  findOne: (id: number) => apiGet<Solicitud>(`/solicitudes/${id}`),
  findByCliente: (clienteId: number) =>
    apiGet<Solicitud[]>(`/solicitudes/cliente/${clienteId}`),
  create: (data: { clienteId: number; servicioId: number; mensaje: string }) =>
    apiPost<Solicitud>('/solicitudes', data),
  updateEstado: (id: number, estado: EstadoSolicitud) =>
    apiPut<Solicitud>(`/solicitudes/${id}`, { estado }),
  remove: (id: number) => apiDelete(`/solicitudes/${id}`),
};
