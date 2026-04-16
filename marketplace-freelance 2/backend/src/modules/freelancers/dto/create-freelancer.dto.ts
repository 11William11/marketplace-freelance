/**
 * DTO para CREAR un Freelancer.
 *
 * Campos requeridos: nombres, apellidos, documentoIdentidad,
 *   correoElectronico, descripcionPerfil
 * Campos opcionales: telefono, portfolioUrl
 *
 * CAMPOS UNIQUE en BD: documentoIdentidad, correoElectronico
 */
import { IsString, IsEmail, IsOptional, IsUrl } from 'class-validator';

export class CreateFreelancerDto {
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
  descripcionPerfil: string;

  @IsString()
  @IsOptional()
  portfolioUrl?: string;
}
