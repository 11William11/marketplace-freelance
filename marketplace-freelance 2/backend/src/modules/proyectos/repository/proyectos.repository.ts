/**
 * REPOSITORIO DE PROYECTOS
 * Include completo: solicitud → cliente, servicio → freelancer y categoría.
 */
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { UpdateProyectoDto } from '../dto/update-proyecto.dto';

const INCLUDE = {
  solicitud: {
    include: {
      cliente: true,
      servicio: { include: { freelancer: true, categoriaServicio: true } },
    },
  },
};

@Injectable()
export class ProyectosRepository {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.proyecto.findMany({ include: INCLUDE, orderBy: { id: 'asc' } });
  }

  findOne(id: number) {
    return this.prisma.proyecto.findUnique({ where: { id }, include: INCLUDE });
  }

  update(id: number, dto: UpdateProyectoDto) {
    const data: Record<string, unknown> = { estado: dto.estado };
    if (dto.fechaInicio) data.fechaInicio = new Date(dto.fechaInicio);
    if (dto.fechaFin) data.fechaFin = new Date(dto.fechaFin);
    return this.prisma.proyecto.update({ where: { id }, data, include: INCLUDE });
  }
}
