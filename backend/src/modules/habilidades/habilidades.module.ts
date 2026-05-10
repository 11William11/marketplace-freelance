import { Module } from '@nestjs/common';
import { HabilidadesController } from './controller/habilidades.controller';
import { HabilidadesService } from './service/habilidades.service';
import { HabilidadesRepository } from './repository/habilidades.repository';

@Module({
  controllers: [HabilidadesController],
  providers: [HabilidadesService, HabilidadesRepository],
  exports: [HabilidadesService],
})
export class HabilidadesModule {}
