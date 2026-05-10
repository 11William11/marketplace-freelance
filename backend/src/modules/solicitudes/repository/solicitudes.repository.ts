/**
 * REPOSITORIO DE SOLICITUDES
 * Include: cliente, servicio (con freelancer y categoría) en todas las consultas.
 */
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { CreateSolicitudDto } from '../dto/create-solicitud.dto';
import { UpdateSolicitudDto } from '../dto/update-solicitud.dto';

const INCLUDE = {
  cliente: true,
  servicio: {
    include: { freelancer: true, categoriaServicio: true },
  },
  proyecto: true,
};

@Injectable()
export class SolicitudesRepository {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.solicitud.findMany({ include: INCLUDE, orderBy: { id: 'asc' } });
  }

  findByCliente(clienteId: number) {
    return this.prisma.solicitud.findMany({ where: { clienteId }, include: INCLUDE });
  }

  findByServicio(servicioId: number) {
    return this.prisma.solicitud.findMany({ where: { servicioId }, include: INCLUDE });
  }

  findOne(id: number) {
    return this.prisma.solicitud.findUnique({ where: { id }, include: INCLUDE });
  }

  create(dto: CreateSolicitudDto) {
    return this.prisma.solicitud.create({ data: dto, include: INCLUDE });
  }

  update(id: number, dto: UpdateSolicitudDto) {
    return this.prisma.solicitud.update({ where: { id }, data: dto, include: INCLUDE });
  }

  remove(id: number) {
    return this.prisma.solicitud.delete({ where: { id } });
  }
}
