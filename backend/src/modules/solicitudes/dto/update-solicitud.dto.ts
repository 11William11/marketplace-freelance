import { IsEnum } from 'class-validator';

export enum EstadoSolicitudDto {
  PENDIENTE = 'PENDIENTE',
  ACEPTADA = 'ACEPTADA',
  RECHAZADA = 'RECHAZADA',
}

export class UpdateSolicitudDto {
  @IsEnum(EstadoSolicitudDto)
  estado: EstadoSolicitudDto;
}
