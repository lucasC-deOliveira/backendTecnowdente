import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServiceEntityTypeorm } from 'src/database/typeorm/entities/service/service';
import { RemoveServiceByIdUseCaseNestjs } from './RemoveServiceByIdUseCaseNestjs';
import { FindServiceByIdRepositoryTypeorm } from 'src/database/typeorm/repositories/service/findServiceById/FindServiceByIdRepositoryTypeorm';
import { DesativeServiceByIdRepositoryTypeorm } from 'src/database/typeorm/repositories/service/desativeServiceById/DesativeServiceByIdRepositoryTypeorm';
import { RemoveServiceByIdController } from 'src/infra/core/nestjs/presentation/rest/controller/service/removeServiceById/remove-service-by-id.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ServiceEntityTypeorm])],
  providers: [
    RemoveServiceByIdUseCaseNestjs,
    FindServiceByIdRepositoryTypeorm,
    DesativeServiceByIdRepositoryTypeorm,
  ],
  controllers: [RemoveServiceByIdController],
})
export class RemoveServicesByIdModule {}
