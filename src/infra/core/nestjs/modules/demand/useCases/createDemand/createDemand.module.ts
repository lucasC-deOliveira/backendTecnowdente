import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DemandEntityTypeorm } from 'src/database/typeorm/entities/demand/DemandEntityTypeorm';
import { CreateDemandRepositoryTypeorm } from 'src/database/typeorm/repositories/demand/createDemandRepositoryTypeorm/CreateDemandRepositoryTypeorm';
import { DemandServiceDetailsEntityTypeorm } from 'src/database/typeorm/entities/demand/DemandServiceDetailsEntityTypeorm';
import { FindServicesByIdsRepositoryTypeorm } from 'src/database/typeorm/repositories/service/findServicesByIds/FindServicesByIdsRepositoryTypeorm';
import { ServiceEntityTypeorm } from 'src/database/typeorm/entities/service/service';
import { CreateDemandUseCaseNestjs } from './CreateDemandUseCaseNestjs';
import { CreateDemandController } from 'src/infra/presentation/nestjs/rest/controller/demand/createDemand/createDemand.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      DemandEntityTypeorm,
      DemandServiceDetailsEntityTypeorm,
      ServiceEntityTypeorm,
    ]),
  ],
  controllers: [CreateDemandController],
  providers: [
    CreateDemandUseCaseNestjs,
    CreateDemandRepositoryTypeorm,
    FindServicesByIdsRepositoryTypeorm,
  ],
})
export class CreateDemandModule {}
