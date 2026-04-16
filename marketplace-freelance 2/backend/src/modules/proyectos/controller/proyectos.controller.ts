/**
 * CONTROLADOR DE PROYECTOS
 *
 * ENDPOINTS:
 *   GET  /api/v1/proyectos      → Listar todos los proyectos con su detalle
 *   GET  /api/v1/proyectos/:id  → Obtener proyecto por ID
 *   PUT  /api/v1/proyectos/:id  → Actualizar estado del proyecto (CU-07)
 *
 * NOTA: Los proyectos se CREAN automáticamente al aceptar una solicitud (SolicitudesService).
 *       Por eso no hay endpoint POST aquí.
 */
import { Controller, Get, Body, Param, Put, ParseIntPipe } from '@nestjs/common';
import { ProyectosService } from '../service/proyectos.service';
import { UpdateProyectoDto } from '../dto/update-proyecto.dto';

@Controller('proyectos')
export class ProyectosController {
  constructor(private readonly proyectosService: ProyectosService) {}

  @Get()
  findAll() {
    return this.proyectosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.proyectosService.findOne(id);
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateProyectoDto) {
    return this.proyectosService.update(id, dto);
  }
}
