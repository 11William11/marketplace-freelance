import { IsString, IsInt } from 'class-validator';

export class CreateSolicitudDto {
  @IsInt()
  clienteId: number;

  @IsInt()
  servicioId: number;

  @IsString()
  mensaje: string;
}
