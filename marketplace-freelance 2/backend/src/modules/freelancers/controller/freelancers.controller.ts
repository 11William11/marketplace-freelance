/**
 * CONTROLADOR DE FREELANCERS
 *
 * ENDPOINTS:
 *   GET    /api/v1/freelancers      → Listar todos
 *   GET    /api/v1/freelancers/:id  → Obtener por ID (con habilidades y servicios)
 *   POST   /api/v1/freelancers      → Crear freelancer
 *   PUT    /api/v1/freelancers/:id  → Actualizar freelancer
 *   DELETE /api/v1/freelancers/:id  → Eliminar freelancer
 */
import { Controller, Get, Post, Body, Param, Put, Delete, ParseIntPipe } from '@nestjs/common';
import { FreelancersService } from '../service/freelancers.service';
import { CreateFreelancerDto } from '../dto/create-freelancer.dto';
import { UpdateFreelancerDto } from '../dto/update-freelancer.dto';

@Controller('freelancers')
export class FreelancersController {
  constructor(private readonly freelancersService: FreelancersService) {}

  @Get()
  findAll() {
    return this.freelancersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.freelancersService.findOne(id);
  }

  @Post()
  create(@Body() createFreelancerDto: CreateFreelancerDto) {
    return this.freelancersService.create(createFreelancerDto);
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateFreelancerDto: UpdateFreelancerDto) {
    return this.freelancersService.update(id, updateFreelancerDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.freelancersService.remove(id);
  }
}
