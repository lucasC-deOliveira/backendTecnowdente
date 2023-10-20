import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DemandEntityTypeorm } from 'src/database/typeorm/entities/demand/DemandEntityTypeorm';
import { EditDemandUseCaseNestjs } from './EditDemandUseCaseNestjs';
import { EditDemandRepositoryTypeorm } from 'src/database/typeorm/repositories/demand/editDemand/EditDemandRepositoryTypeorm';
import { FindServicesByIdsRepositoryTypeorm } from 'src/database/typeorm/repositories/service/findServicesByIds/FindServicesByIdsRepositoryTypeorm';
import { FindDemandByIdRepositoryTypeorm } from 'src/database/typeorm/repositories/demand/findDemandById/FindDemandByIdRepositoryTypeorm';
import { EditDemandController } from 'src/infra/core/nestjs/presentation/rest/controller/demand/edit-demand/edit-demand.controller';
import { ServiceEntityTypeorm } from 'src/database/typeorm/entities/service/service';

@Module({
  imports: [
    TypeOrmModule.forFeature([DemandEntityTypeorm, ServiceEntityTypeorm]),
  ],
  providers: [
    EditDemandUseCaseNestjs,
    EditDemandRepositoryTypeorm,
    FindServicesByIdsRepositoryTypeorm,
    FindDemandByIdRepositoryTypeorm,
  ],
  controllers: [EditDemandController],
})
export class EditDemandModule {}
