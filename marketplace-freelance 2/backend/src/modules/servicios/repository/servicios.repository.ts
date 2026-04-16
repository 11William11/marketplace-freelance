/**
 * REPOSITORIO DE SERVICIOS
 * Include: freelancer y categoriaServicio en todas las consultas.
 * Soporta búsqueda por categoría (CU-04).
 */
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { CreateServicioDto } from '../dto/create-servicio.dto';
import { UpdateServicioDto } from '../dto/update-servicio.dto';

const INCLUDE = {
  freelancer: true,
  categoriaServicio: true,
};

@Injectable()
export class ServiciosRepository {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.servicio.findMany({
      include: INCLUDE,
      orderBy: { id: 'asc' },
    });
  }

  findByCategoria(categoriaId: number) {
    return this.prisma.servicio.findMany({
      where: { categoriaServicioId: categoriaId, activo: true },
      include: INCLUDE,
      orderBy: { id: 'asc' },
    });
  }

  findByFreelancer(freelancerId: number) {
    return this.prisma.servicio.findMany({
      where: { freelancerId },
      include: INCLUDE,
      orderBy: { id: 'asc' },
    });
  }

  findOne(id: number) {
    return this.prisma.servicio.findUnique({ where: { id }, include: INCLUDE });
  }

  create(dto: CreateServicioDto) {
    return this.prisma.servicio.create({ data: dto, include: INCLUDE });
  }

  update(id: number, dto: UpdateServicioDto) {
    return this.prisma.servicio.update({ where: { id }, data: dto, include: INCLUDE });
  }

  remove(id: number) {
    return this.prisma.servicio.delete({ where: { id } });
  }
}
