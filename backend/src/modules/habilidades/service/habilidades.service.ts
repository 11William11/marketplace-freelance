import { Injectable, NotFoundException } from '@nestjs/common';
import { HabilidadesRepository } from '../repository/habilidades.repository';
import { CreateHabilidadDto } from '../dto/create-habilidad.dto';
import { UpdateHabilidadDto } from '../dto/update-habilidad.dto';

@Injectable()
export class HabilidadesService {
  constructor(private readonly habilidadesRepository: HabilidadesRepository) {}

  findAll() {
    return this.habilidadesRepository.findAll();
  }

  findByFreelancer(freelancerId: number) {
    return this.habilidadesRepository.findByFreelancer(freelancerId);
  }

  async findOne(id: number) {
    const habilidad = await this.habilidadesRepository.findOne(id);
    if (!habilidad) throw new NotFoundException(`Habilidad con ID ${id} no encontrada`);
    return habilidad;
  }

  async create(dto: CreateHabilidadDto) {
    return this.habilidadesRepository.create(dto);
  }

  async update(id: number, dto: UpdateHabilidadDto) {
    await this.findOne(id);
    return this.habilidadesRepository.update(id, dto);
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.habilidadesRepository.remove(id);
  }
}
