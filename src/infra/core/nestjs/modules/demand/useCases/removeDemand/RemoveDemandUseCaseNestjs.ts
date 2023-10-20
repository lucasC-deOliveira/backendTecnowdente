import { Injectable } from '@nestjs/common';
import { FindDemandByIdRepositoryTypeorm } from 'src/database/typeorm/repositories/demand/findDemandById/FindDemandByIdRepositoryTypeorm';
import { RemoveDemandByIdRepositoryTypeorm } from 'src/database/typeorm/repositories/demand/removeDemandById/RemoveDemandByIdRepositoryTypeorm';
import { RemoveDemandUseCase } from 'src/domain/modules/demand/useCases/removeDemand/RemoveDemandUseCase';

@Injectable()
export class RemoveDemandUseCaseNestjs extends RemoveDemandUseCase {
  constructor(
    findDemandByIdRepositoryTypeorm: FindDemandByIdRepositoryTypeorm,
    removeDemandByIdRepositoryTypeorm: RemoveDemandByIdRepositoryTypeorm,
  ) {
    super(findDemandByIdRepositoryTypeorm, removeDemandByIdRepositoryTypeorm);
  }
}
