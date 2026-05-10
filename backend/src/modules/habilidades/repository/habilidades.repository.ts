import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { CreateHabilidadDto } from '../dto/create-habilidad.dto';
import { UpdateHabilidadDto } from '../dto/update-habilidad.dto';

@Injectable()
export class HabilidadesRepository {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.habilidad.findMany({
      include: { freelancer: true },
      orderBy: { id: 'asc' },
    });
  }

  findByFreelancer(freelancerId: number) {
    return this.prisma.habilidad.findMany({ where: { freelancerId } });
  }

  findOne(id: number) {
    return this.prisma.habilidad.findUnique({
      where: { id },
      include: { freelancer: true },
    });
  }

  create(dto: CreateHabilidadDto) {
    return this.prisma.habilidad.create({
      data: dto,
      include: { freelancer: true },
    });
  }

  update(id: number, dto: UpdateHabilidadDto) {
    return this.prisma.habilidad.update({
      where: { id },
      data: dto,
      include: { freelancer: true },
    });
  }

  remove(id: number) {
    return this.prisma.habilidad.delete({ where: { id } });
  }
}
