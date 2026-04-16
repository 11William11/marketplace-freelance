/**
 * CONTROLADOR DE SERVICIOS
 *
 * ENDPOINTS:
 *   GET    /api/v1/servicios                          → Listar todos
 *   GET    /api/v1/servicios/:id                      → Obtener por ID
 *   GET    /api/v1/servicios/categoria/:categoriaId   → Buscar por categoría (CU-04)
 *   GET    /api/v1/servicios/freelancer/:freelancerId → Por freelancer
 *   POST   /api/v1/servicios                          → Publicar servicio (CU-02)
 *   PUT    /api/v1/servicios/:id                      → Actualizar
 *   DELETE /api/v1/servicios/:id                      → Eliminar
 */
import { Controller, Get, Post, Body, Param, Put, Delete, ParseIntPipe } from '@nestjs/common';
import { ServiciosService } from '../service/servicios.service';
import { CreateServicioDto } from '../dto/create-servicio.dto';
import { UpdateServicioDto } from '../dto/update-servicio.dto';

@Controller('servicios')
export class ServiciosController {
  constructor(private readonly serviciosService: ServiciosService) {}

  @Get()
  findAll() {
    return this.serviciosService.findAll();
  }

  @Get('categoria/:categoriaId')
  findByCategoria(@Param('categoriaId', ParseIntPipe) categoriaId: number) {
    return this.serviciosService.findByCategoria(categoriaId);
  }

  @Get('freelancer/:freelancerId')
  findByFreelancer(@Param('freelancerId', ParseIntPipe) freelancerId: number) {
    return this.serviciosService.findByFreelancer(freelancerId);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.serviciosService.findOne(id);
  }

  @Post()
  create(@Body() dto: CreateServicioDto) {
    return this.serviciosService.create(dto);
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateServicioDto) {
    return this.serviciosService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.serviciosService.remove(id);
  }
}
