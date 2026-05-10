import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { ClientesRepository } from '../repository/clientes.repository';
import { CreateClienteDto } from '../dto/create-cliente.dto';
import { UpdateClienteDto } from '../dto/update-cliente.dto';

@Injectable()
export class ClientesService {
  constructor(private readonly clientesRepository: ClientesRepository) {}

  findAll() {
    return this.clientesRepository.findAll();
  }

  async findOne(id: number) {
    const cliente = await this.clientesRepository.findOne(id);
    if (!cliente) throw new NotFoundException(`Cliente con ID ${id} no encontrado`);
    return cliente;
  }

  async create(dto: CreateClienteDto) {
    try {
      return await this.clientesRepository.create(dto);
    } catch (error: any) {
      if (error.code === 'P2002') throw new ConflictException('Ya existe un cliente con ese documento o correo');
      throw error;
    }
  }

  async update(id: number, dto: UpdateClienteDto) {
    await this.findOne(id);
    try {
      return await this.clientesRepository.update(id, dto);
    } catch (error: any) {
      if (error.code === 'P2002') throw new ConflictException('Ya existe un cliente con ese documento o correo');
      throw error;
    }
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.clientesRepository.remove(id);
  }
}
