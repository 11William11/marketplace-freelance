/**
 * SERVICIO DE FREELANCERS
 * Lógica de negocio: verificar existencia, manejar duplicados.
 */
import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { FreelancersRepository } from '../repository/freelancers.repository';
import { CreateFreelancerDto } from '../dto/create-freelancer.dto';
import { UpdateFreelancerDto } from '../dto/update-freelancer.dto';

@Injectable()
export class FreelancersService {
  constructor(private readonly freelancersRepository: FreelancersRepository) {}

  findAll() {
    return this.freelancersRepository.findAll();
  }

  async findOne(id: number) {
    const freelancer = await this.freelancersRepository.findOne(id);
    if (!freelancer) throw new NotFoundException(`Freelancer con ID ${id} no encontrado`);
    return freelancer;
  }

  async create(dto: CreateFreelancerDto) {
    try {
      return await this.freelancersRepository.create(dto);
    } catch (error: any) {
      if (error.code === 'P2002') throw new ConflictException('Ya existe un freelancer con ese documento o correo');
      throw error;
    }
  }

  async update(id: number, dto: UpdateFreelancerDto) {
    await this.findOne(id);
    try {
      return await this.freelancersRepository.update(id, dto);
    } catch (error: any) {
      if (error.code === 'P2002') throw new ConflictException('Ya existe un freelancer con ese documento o correo');
      throw error;
    }
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.freelancersRepository.remove(id);
  }
}
