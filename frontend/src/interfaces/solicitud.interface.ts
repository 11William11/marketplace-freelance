import type { Cliente } from './cliente.interface';
import type { Servicio } from './servicio.interface';

export type EstadoSolicitud = 'PENDIENTE' | 'ACEPTADA' | 'RECHAZADA';

export interface Solicitud {
  id: number;
  clienteId: number;
  servicioId: number;
  mensaje: string;
  estado: EstadoSolicitud;
  cliente: Cliente;
  servicio: Servicio;
  proyecto?: { id: number; estado: string };
  createdAt: string;
  updatedAt: string;
}
