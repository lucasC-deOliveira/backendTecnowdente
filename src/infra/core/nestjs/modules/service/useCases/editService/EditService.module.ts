import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServiceEntityTypeorm } from 'src/database/typeorm/entities/service/service';
import { EditServiceUseCaseNestjs } from './EditServiceUseCaseNestjs';
import { FindServiceByIdRepositoryTypeorm } from 'src/database/typeorm/repositories/service/findServiceById/FindServiceByIdRepositoryTypeorm';
import { EditServiceByIdRepositoryTypeorm } from 'src/database/typeorm/repositories/service/editServiceById/EditServiceByIdRepositoryTypeorm';
import { EditServiceController } from 'src/infra/core/nestjs/presentation/rest/controller/service/editService/edit-service.controller';
import { FindServiceByNameRepositoryTypeorm } from 'src/database/typeorm/repositories/service/findServiceByName/FindServiceByNameRepositoryTypeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ServiceEntityTypeorm])],
  providers: [
    EditServiceUseCaseNestjs,
    FindServiceByIdRepositoryTypeorm,
    EditServiceByIdRepositoryTypeorm,
    FindServiceByNameRepositoryTypeorm,
  ],
  controllers: [EditServiceController],
})
export class EditServiceModule {}
