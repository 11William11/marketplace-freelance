import { IsString, IsNumber, IsInt, IsBoolean, IsOptional, Min } from 'class-validator';

export class CreateServicioDto {
  @IsString()
  titulo: string;

  @IsString()
  descripcion: string;

  @IsNumber()
  @Min(0)
  precio: number;

  @IsInt()
  @Min(1)
  tiempoEntregaDias: number;

  @IsBoolean()
  @IsOptional()
  activo?: boolean;

  @IsInt()
  freelancerId: number;

  @IsInt()
  categoriaServicioId: number;
}
