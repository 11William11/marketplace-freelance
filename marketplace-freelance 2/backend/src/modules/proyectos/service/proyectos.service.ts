/**
 * SERVICIO DE PROYECTOS
 *
 * Lógica de negocio (CU-07: actualizar estado del proyecto):
 *   - Los proyectos se crean automáticamente desde SolicitudesService.
 *   - Aquí solo se listan y actualizan sus estados.
 *   - Al pasar a EN_PROGRESO se registra fechaInicio automáticamente.
 *   - Al pasar a COMPLETADO o CANCELADO se registra fechaFin automáticamente.
 */
import { Injectable, NotFoundException } from '@nestjs/common';
import { ProyectosRepository } from '../repository/proyectos.repository';
import { UpdateProyectoDto, EstadoProyectoDto } from '../dto/update-proyecto.dto';

@Injectable()
export class ProyectosService {
  constructor(private readonly proyectosRepository: ProyectosRepository) {}

  findAll() {
    return this.proyectosRepository.findAll();
  }

  async findOne(id: number) {
    const proyecto = await this.proyectosRepository.findOne(id);
    if (!proyecto) throw new NotFoundException(`Proyecto con ID ${id} no encontrado`);
    return proyecto;
  }

  async update(id: number, dto: UpdateProyectoDto) {
    await this.findOne(id);

    // Auto-registrar fechaInicio al iniciar el proyecto
    if (dto.estado === EstadoProyectoDto.EN_PROGRESO && !dto.fechaInicio) {
      dto.fechaInicio = new Date().toISOString();
    }

    // Auto-registrar fechaFin al completar o cancelar
    if (
      (dto.estado === EstadoProyectoDto.COMPLETADO ||
        dto.estado === EstadoProyectoDto.CANCELADO) &&
      !dto.fechaFin
    ) {
      dto.fechaFin = new Date().toISOString();
    }

    return this.proyectosRepository.update(id, dto);
  }
}
