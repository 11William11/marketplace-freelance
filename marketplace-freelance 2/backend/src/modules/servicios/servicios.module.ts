import { Module } from '@nestjs/common';
import { ServiciosController } from './controller/servicios.controller';
import { ServiciosService } from './service/servicios.service';
import { ServiciosRepository } from './repository/servicios.repository';

@Module({
  controllers: [ServiciosController],
  providers: [ServiciosService, ServiciosRepository],
  exports: [ServiciosService],
})
export class ServiciosModule {}
