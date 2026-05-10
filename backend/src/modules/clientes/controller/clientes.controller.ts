/**
 * CONTROLADOR DE CLIENTES
 *
 * ENDPOINTS:
 *   GET    /api/v1/clientes      → Listar todos
 *   GET    /api/v1/clientes/:id  → Obtener por ID
 *   POST   /api/v1/clientes      → Crear cliente
 *   PUT    /api/v1/clientes/:id  → Actualizar cliente
 *   DELETE /api/v1/clientes/:id  → Eliminar cliente
 */
import { Controller, Get, Post, Body, Param, Put, Delete, ParseIntPipe } from '@nestjs/common';
import { ClientesService } from '../service/clientes.service';
import { CreateClienteDto } from '../dto/create-cliente.dto';
import { UpdateClienteDto } from '../dto/update-cliente.dto';

@Controller('clientes')
export class ClientesController {
  constructor(private readonly clientesService: ClientesService) {}

  @Get()
  findAll() { return this.clientesService.findAll(); }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) { return this.clientesService.findOne(id); }

  @Post()
  create(@Body() dto: CreateClienteDto) { return this.clientesService.create(dto); }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateClienteDto) {
    return this.clientesService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) { return this.clientesService.remove(id); }
}
