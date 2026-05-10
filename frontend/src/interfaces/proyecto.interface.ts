import type { Solicitud } from './solicitud.interface';

export type EstadoProyecto = 'PENDIENTE' | 'EN_PROGRESO' | 'EN_REVISION' | 'COMPLETADO' | 'CANCELADO';

export interface Proyecto {
  id: number;
  solicitudId: number;
  estado: EstadoProyecto;
  fechaInicio?: string;
  fechaFin?: string;
  solicitud: Solicitud;
  createdAt: string;
  updatedAt: string;
}
