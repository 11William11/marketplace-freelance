/**
 * REPOSITORIO DE CATEGORÍAS DE SERVICIO
 * Consultas Prisma para el CRUD de categorías.
 */
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { CreateCategoriaDto } from '../dto/create-categoria.dto';
import { UpdateCategoriaDto } from '../dto/update-categoria.dto';

@Injectable()
export class CategoriasRepository {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.categoriaServicio.findMany({
      orderBy: { id: 'asc' },
    });
  }

  findOne(id: number) {
    return this.prisma.categoriaServicio.findUnique({ where: { id } });
  }

  create(dto: CreateCategoriaDto) {
    return this.prisma.categoriaServicio.create({ data: dto });
  }

  update(id: number, dto: UpdateCategoriaDto) {
    return this.prisma.categoriaServicio.update({ where: { id }, data: dto });
  }

  remove(id: number) {
    return this.prisma.categoriaServicio.delete({ where: { id } });
  }
}
