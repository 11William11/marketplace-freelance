/**
 * CONTROLADOR DE CATEGORÍAS DE SERVICIO
 *
 * ENDPOINTS:
 *   GET    /api/v1/categorias      → Listar todas las categorías
 *   GET    /api/v1/categorias/:id  → Obtener categoría por ID
 *   POST   /api/v1/categorias      → Crear categoría
 *   PUT    /api/v1/categorias/:id  → Actualizar categoría
 *   DELETE /api/v1/categorias/:id  → Eliminar categoría
 */
import { Controller, Get, Post, Body, Param, Put, Delete, ParseIntPipe } from '@nestjs/common';
import { CategoriasService } from '../service/categorias.service';
import { CreateCategoriaDto } from '../dto/create-categoria.dto';
import { UpdateCategoriaDto } from '../dto/update-categoria.dto';

@Controller('categorias')
export class CategoriasController {
  constructor(private readonly categoriasService: CategoriasService) {}

  @Get()
  findAll() {
    return this.categoriasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.categoriasService.findOne(id);
  }

  @Post()
  create(@Body() createCategoriaDto: CreateCategoriaDto) {
    return this.categoriasService.create(createCategoriaDto);
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateCategoriaDto: UpdateCategoriaDto) {
    return this.categoriasService.update(id, updateCategoriaDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.categoriasService.remove(id);
  }
}
