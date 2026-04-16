/**
 * SERVICIO DE SOLICITUDES
 *
 * Lógica de negocio:
 *   - Al ACEPTAR una solicitud (CU-06) se crea automáticamente un Proyecto
 *     con estado PENDIENTE vinculado a esa solicitud.
 *   - Solo se puede aceptar/rechazar solicitudes en estado PENDIENTE.
 */
import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { SolicitudesRepository } from '../repository/solicitudes.repository';
import { CreateSolicitudDto } from '../dto/create-solicitud.dto';
import { UpdateSolicitudDto } from '../dto/update-solicitud.dto';
import { PrismaService } from '../../../prisma/prisma.service';

@Injectable()
export class SolicitudesService {
  constructor(
    private readonly solicitudesRepository: SolicitudesRepository,
    private readonly prisma: PrismaService,
  ) {}

  findAll() {
    return this.solicitudesRepository.findAll();
  }

  findByCliente(clienteId: number) {
    return this.solicitudesRepository.findByCliente(clienteId);
  }

  findByServicio(servicioId: number) {
    return this.solicitudesRepository.findByServicio(servicioId);
  }

  async findOne(id: number) {
    const solicitud = await this.solicitudesRepository.findOne(id);
    if (!solicitud) throw new NotFoundException(`Solicitud con ID ${id} no encontrada`);
    return solicitud;
  }

  async create(dto: CreateSolicitudDto) {
    return this.solicitudesRepository.create(dto);
  }

  /**
   * Actualizar estado (CU-06: aceptar o rechazar solicitud).
   * Si se ACEPTA → crea Proyecto automáticamente con estado PENDIENTE.
   * Si ya tiene proyecto no permite volver a PENDIENTE.
   */
  async update(id: number, dto: UpdateSolicitudDto) {
    const solicitud = await this.findOne(id);

    if (solicitud.estado !== 'PENDIENTE') {
      throw new BadRequestException(
        `La solicitud ya fue ${solicitud.estado.toLowerCase()}. No se puede modificar.`,
      );
    }

    // Actualizar estado de la solicitud
    const actualizada = await this.solicitudesRepository.update(id, dto);

    // Si fue ACEPTADA → crear Proyecto automáticamente (CU-06)
    if (dto.estado === 'ACEPTADA') {
      await this.prisma.proyecto.create({
        data: {
          solicitudId: id,
          estado: 'PENDIENTE',
        },
      });
    }

    return actualizada;
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.solicitudesRepository.remove(id);
  }
}
