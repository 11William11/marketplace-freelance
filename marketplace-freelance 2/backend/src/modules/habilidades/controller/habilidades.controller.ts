/**
 * CONTROLADOR DE HABILIDADES
 *
 * ENDPOINTS:
 *   GET    /api/v1/habilidades                          → Listar todas
 *   GET    /api/v1/habilidades/:id                      → Obtener por ID
 *   GET    /api/v1/habilidades/freelancer/:freelancerId → Por freelancer
 *   POST   /api/v1/habilidades                          → Crear habilidad
 *   PUT    /api/v1/habilidades/:id                      → Actualizar
 *   DELETE /api/v1/habilidades/:id                      → Eliminar
 */
import { Controller, Get, Post, Body, Param, Put, Delete, ParseIntPipe } from '@nestjs/common';
import { HabilidadesService } from '../service/habilidades.service';
import { CreateHabilidadDto } from '../dto/create-habilidad.dto';
import { UpdateHabilidadDto } from '../dto/update-habilidad.dto';

@Controller('habilidades')
export class HabilidadesController {
  constructor(private readonly habilidadesService: HabilidadesService) {}

  @Get()
  findAll() { return this.habilidadesService.findAll(); }

  @Get('freelancer/:freelancerId')
  findByFreelancer(@Param('freelancerId', ParseIntPipe) freelancerId: number) {
    return this.habilidadesService.findByFreelancer(freelancerId);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) { return this.habilidadesService.findOne(id); }

  @Post()
  create(@Body() dto: CreateHabilidadDto) { return this.habilidadesService.create(dto); }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateHabilidadDto) {
    return this.habilidadesService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) { return this.habilidadesService.remove(id); }
}
