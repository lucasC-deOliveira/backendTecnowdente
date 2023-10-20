import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DemandEntityTypeorm } from 'src/database/typeorm/entities/demand/DemandEntityTypeorm';
import { RemoveDemandUseCaseNestjs } from './RemoveDemandUseCaseNestjs';
import { FindDemandByIdRepositoryTypeorm } from 'src/database/typeorm/repositories/demand/findDemandById/FindDemandByIdRepositoryTypeorm';
import { RemoveDemandByIdRepositoryTypeorm } from 'src/database/typeorm/repositories/demand/removeDemandById/RemoveDemandByIdRepositoryTypeorm';
import { RemoveDemandController } from 'src/infra/core/nestjs/presentation/rest/controller/demand/removeDemand/remove-demand.controller';

@Module({
  imports: [TypeOrmModule.forFeature([DemandEntityTypeorm])],
  providers: [
    RemoveDemandUseCaseNestjs,
    FindDemandByIdRepositoryTypeorm,
    RemoveDemandByIdRepositoryTypeorm,
  ],
  controllers: [RemoveDemandController],
})
export class RemoveDemand {}
