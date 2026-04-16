import { IsString, IsInt } from 'class-validator';

export class CreateHabilidadDto {
  @IsString()
  nombre: string;

  @IsInt()
  freelancerId: number;
}
