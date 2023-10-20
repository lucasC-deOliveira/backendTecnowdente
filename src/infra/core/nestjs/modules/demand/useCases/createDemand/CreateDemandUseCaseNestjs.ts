import { Injectable } from '@nestjs/common';
import { CreateDemandUseCase } from 'src/domain/modules/demand/useCases/createDemand/CreateDemandUseCase';
import { CreateDemandRepositoryTypeorm } from 'src/database/typeorm/repositories/demand/createDemandRepositoryTypeorm/CreateDemandRepositoryTypeorm';
import { FindServicesByIdsRepositoryTypeorm } from 'src/database/typeorm/repositories/service/findServicesByIds/FindServicesByIdsRepositoryTypeorm';

@Injectable()
export class CreateDemandUseCaseNestjs extends CreateDemandUseCase {
  constructor(
    createDemandRepositoryTypeorm: CreateDemandRepositoryTypeorm,
    findServiceByIdsRepositoryTypeorm: FindServicesByIdsRepositoryTypeorm,
  ) {
    super(createDemandRepositoryTypeorm, findServiceByIdsRepositoryTypeorm);
  }
}
