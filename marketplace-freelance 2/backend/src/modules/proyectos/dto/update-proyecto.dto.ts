import { IsEnum, IsOptional, IsDateString } from 'class-validator';

export enum EstadoProyectoDto {
  PENDIENTE = 'PENDIENTE',
  EN_PROGRESO = 'EN_PROGRESO',
  EN_REVISION = 'EN_REVISION',
  COMPLETADO = 'COMPLETADO',
  CANCELADO = 'CANCELADO',
}

export class UpdateProyectoDto {
  @IsEnum(EstadoProyectoDto)
  estado: EstadoProyectoDto;

  @IsDateString()
  @IsOptional()
  fechaInicio?: string;

  @IsDateString()
  @IsOptional()
  fechaFin?: string;
}
