import { IsString, IsEmail, IsOptional } from 'class-validator';

export class CreateClienteDto {
  @IsString()
  nombres: string;

  @IsString()
  apellidos: string;

  @IsString()
  documentoIdentidad: string;

  @IsEmail()
  correoElectronico: string;

  @IsString()
  @IsOptional()
  telefono?: string;

  @IsString()
  @IsOptional()
  empresa?: string;
}
