import { Injectable } from '@nestjs/common';
import { FindDemandByIdRepositoryTypeorm } from 'src/database/typeorm/repositories/demand/findDemandById/FindDemandByIdRepositoryTypeorm';
import { GetDemandByIdUseCase } from 'src/domain/modules/demand/useCases/getDemandById/GetDemandByIdUsecase';

@Injectable()
export class GetDemandByIdUseCaseNestjs extends GetDemandByIdUseCase {
  constructor(
    findDemandByIdRepositoryTypeorm: FindDemandByIdRepositoryTypeorm,
  ) {
    super(findDemandByIdRepositoryTypeorm);
  }
}
