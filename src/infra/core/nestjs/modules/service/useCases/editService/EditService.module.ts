import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServiceEntityTypeorm } from 'src/database/typeorm/entities/service/service';
import { EditServiceUseCaseNestjs } from './EditServiceUseCaseNestjs';
import { FindServiceByIdRepositoryTypeorm } from 'src/database/typeorm/repositories/service/findServiceById/FindServiceByIdRepositoryTypeorm';
import { EditServiceByIdRepositoryTypeorm } from 'src/database/typeorm/repositories/service/editServiceById/EditServiceByIdRepositoryTypeorm';
import { EditServiceController } from 'src/infra/presentation/nestjs/rest/controller/service/editService/edit-service.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ServiceEntityTypeorm])],
  providers: [
    EditServiceUseCaseNestjs,
    FindServiceByIdRepositoryTypeorm,
    EditServiceByIdRepositoryTypeorm,
  ],
  controllers: [EditServiceController],
})
export class EditServiceModule {}
