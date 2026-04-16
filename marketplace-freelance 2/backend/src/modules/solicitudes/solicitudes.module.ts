import { Module } from '@nestjs/common';
import { SolicitudesController } from './controller/solicitudes.controller';
import { SolicitudesService } from './service/solicitudes.service';
import { SolicitudesRepository } from './repository/solicitudes.repository';

@Module({
  controllers: [SolicitudesController],
  providers: [SolicitudesService, SolicitudesRepository],
  exports: [SolicitudesService],
})
export class SolicitudesModule {}
