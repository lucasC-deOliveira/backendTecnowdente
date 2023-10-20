import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DemandEntityTypeorm } from 'src/database/typeorm/entities/demand/DemandEntityTypeorm';
import { ListDemandUseCaseNestjs } from './ListDemandUseCaseNestjs';
import { ListDemandsRepositoryTypeorm } from 'src/database/typeorm/repositories/demand/listDemands/ListDemandsRepositoryTypeorm';
import { ListDemandController } from 'src/infra/core/nestjs/presentation/rest/controller/demand/listDemand/list-demand.controller';

@Module({
  imports: [TypeOrmModule.forFeature([DemandEntityTypeorm])],
  providers: [ListDemandUseCaseNestjs, ListDemandsRepositoryTypeorm],
  controllers: [ListDemandController],
})
export class ListDemandModule {}
