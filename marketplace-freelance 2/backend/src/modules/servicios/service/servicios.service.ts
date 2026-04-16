/**
 * SERVICIO DE SERVICIOS
 *
 * Lógica de negocio:
 *   - findAll: lista todos los servicios con freelancer y categoría
 *   - findByCategoria: búsqueda por categoría (CU-04)
 *   - findByFreelancer: servicios de un freelancer específico
 *   - findOne: obtener detalle con relaciones
 *   - create / update / remove: CRUD estándar
 */
import { Injectable, NotFoundException } from '@nestjs/common';
import { ServiciosRepository } from '../repository/servicios.repository';
import { CreateServicioDto } from '../dto/create-servicio.dto';
import { UpdateServicioDto } from '../dto/update-servicio.dto';

@Injectable()
export class ServiciosService {
  constructor(private readonly serviciosRepository: ServiciosRepository) {}

  findAll() {
    return this.serviciosRepository.findAll();
  }

  findByCategoria(categoriaId: number) {
    return this.serviciosRepository.findByCategoria(categoriaId);
  }

  findByFreelancer(freelancerId: number) {
    return this.serviciosRepository.findByFreelancer(freelancerId);
  }

  async findOne(id: number) {
    const servicio = await this.serviciosRepository.findOne(id);
    if (!servicio) throw new NotFoundException(`Servicio con ID ${id} no encontrado`);
    return servicio;
  }

  async create(dto: CreateServicioDto) {
    return this.serviciosRepository.create(dto);
  }

  async update(id: number, dto: UpdateServicioDto) {
    await this.findOne(id);
    return this.serviciosRepository.update(id, dto);
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.serviciosRepository.remove(id);
  }
}
