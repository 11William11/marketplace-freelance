/**
 * CONTROLADOR DE SOLICITUDES
 *
 * ENDPOINTS:
 *   GET    /api/v1/solicitudes                        → Listar todas
 *   GET    /api/v1/solicitudes/:id                    → Obtener por ID
 *   GET    /api/v1/solicitudes/cliente/:clienteId     → Por cliente
 *   GET    /api/v1/solicitudes/servicio/:servicioId   → Por servicio
 *   POST   /api/v1/solicitudes                        → Crear solicitud (CU-05)
 *   PUT    /api/v1/solicitudes/:id                    → Aceptar/Rechazar (CU-06)
 *   DELETE /api/v1/solicitudes/:id                    → Eliminar
 */
import { Controller, Get, Post, Body, Param, Put, Delete, ParseIntPipe } from '@nestjs/common';
import { SolicitudesService } from '../service/solicitudes.service';
import { CreateSolicitudDto } from '../dto/create-solicitud.dto';
import { UpdateSolicitudDto } from '../dto/update-solicitud.dto';

@Controller('solicitudes')
export class SolicitudesController {
  constructor(private readonly solicitudesService: SolicitudesService) {}

  @Get()
  findAll() {
    return this.solicitudesService.findAll();
  }

  @Get('cliente/:clienteId')
  findByCliente(@Param('clienteId', ParseIntPipe) clienteId: number) {
    return this.solicitudesService.findByCliente(clienteId);
  }

  @Get('servicio/:servicioId')
  findByServicio(@Param('servicioId', ParseIntPipe) servicioId: number) {
    return this.solicitudesService.findByServicio(servicioId);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.solicitudesService.findOne(id);
  }

  @Post()
  create(@Body() dto: CreateSolicitudDto) {
    return this.solicitudesService.create(dto);
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateSolicitudDto) {
    return this.solicitudesService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.solicitudesService.remove(id);
  }
}
