import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServiceEntityTypeorm } from 'src/database/typeorm/entities/service/service';
import { FindServiceByIdRepositoryTypeorm } from 'src/database/typeorm/repositories/service/findServiceById/FindServiceByIdRepositoryTypeorm';
import { FindServiceByIdUseCaseNestjs } from './FindServiceByIdUseCaseNestjs';
import { FindServiceByIdController } from 'src/infra/core/nestjs/presentation/rest/controller/service/findServiceById/find-service-by-id.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ServiceEntityTypeorm])],
  providers: [FindServiceByIdRepositoryTypeorm, FindServiceByIdUseCaseNestjs],
  controllers: [FindServiceByIdController],
})
export class FindServiceByIdModule {}
