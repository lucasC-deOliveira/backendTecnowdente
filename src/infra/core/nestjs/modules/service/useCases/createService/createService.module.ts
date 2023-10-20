import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CreateServiceUseCaseNestjs } from './createServiceUseCaseNestjs';
import { ServiceEntityTypeorm } from 'src/database/typeorm/entities/service/service';
import { FindServiceByNameRepositoryTypeorm } from 'src/database/typeorm/repositories/service/findServiceByName/FindServiceByNameRepositoryTypeorm';
import { CreateServiceRepositoryTypeorm } from 'src/database/typeorm/repositories/service/createService/CreateServiceRepositoryTypeorm';
import { CreateServiceController } from 'src/infra/presentation/nestjs/rest/controller/service/createService/create-service.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ServiceEntityTypeorm])],
  providers: [
    CreateServiceUseCaseNestjs,
    FindServiceByNameRepositoryTypeorm,
    CreateServiceRepositoryTypeorm,
  ],
  controllers: [CreateServiceController],
})
export class CreateServiceModule {}
