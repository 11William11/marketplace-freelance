import { Module } from '@nestjs/common';
import { ProyectosController } from './controller/proyectos.controller';
import { ProyectosService } from './service/proyectos.service';
import { ProyectosRepository } from './repository/proyectos.repository';

@Module({
  controllers: [ProyectosController],
  providers: [ProyectosService, ProyectosRepository],
  exports: [ProyectosService],
})
export class ProyectosModule {}
