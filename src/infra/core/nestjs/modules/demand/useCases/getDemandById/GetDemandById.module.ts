import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DemandEntityTypeorm } from 'src/database/typeorm/entities/demand/DemandEntityTypeorm';
import { GetDemandByIdUseCaseNestjs } from './GetDemandByIdUseCaseNestjs';
import { FindDemandByIdRepositoryTypeorm } from 'src/database/typeorm/repositories/demand/findDemandById/FindDemandByIdRepositoryTypeorm';
import { GetDemandByIdController } from 'src/infra/core/nestjs/presentation/rest/controller/demand/getDemandById/get-demand-by-id.controller';

@Module({
  imports: [TypeOrmModule.forFeature([DemandEntityTypeorm])],
  providers: [GetDemandByIdUseCaseNestjs, FindDemandByIdRepositoryTypeorm],
  controllers: [GetDemandByIdController],
})
export class GetDemandByIdModule {}
