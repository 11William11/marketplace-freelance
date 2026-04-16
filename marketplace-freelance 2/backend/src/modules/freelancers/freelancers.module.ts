import { Module } from '@nestjs/common';
import { FreelancersController } from './controller/freelancers.controller';
import { FreelancersService } from './service/freelancers.service';
import { FreelancersRepository } from './repository/freelancers.repository';

@Module({
  controllers: [FreelancersController],
  providers: [FreelancersService, FreelancersRepository],
  exports: [FreelancersService],
})
export class FreelancersModule {}
