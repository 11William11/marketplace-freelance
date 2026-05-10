/**
 * REPOSITORIO DE FREELANCERS
 * Consultas Prisma para el CRUD de freelancers.
 * Include: habilidades y servicios asociados en findAll/findOne.
 */
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { CreateFreelancerDto } from '../dto/create-freelancer.dto';
import { UpdateFreelancerDto } from '../dto/update-freelancer.dto';

@Injectable()
export class FreelancersRepository {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.freelancer.findMany({
      include: { habilidades: true },
      orderBy: { id: 'asc' },
    });
  }

  findOne(id: number) {
    return this.prisma.freelancer.findUnique({
      where: { id },
      include: {
        habilidades: true,
        servicios: { include: { categoriaServicio: true } },
      },
    });
  }

  create(dto: CreateFreelancerDto) {
    return this.prisma.freelancer.create({
      data: dto,
      include: { habilidades: true },
    });
  }

  update(id: number, dto: UpdateFreelancerDto) {
    return this.prisma.freelancer.update({
      where: { id },
      data: dto,
      include: { habilidades: true },
    });
  }

  remove(id: number) {
    return this.prisma.freelancer.delete({ where: { id } });
  }
}
