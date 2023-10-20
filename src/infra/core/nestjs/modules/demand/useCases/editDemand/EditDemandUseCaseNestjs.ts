import { Injectable } from '@nestjs/common';
import { EditDemandRepositoryTypeorm } from 'src/database/typeorm/repositories/demand/editDemand/EditDemandRepositoryTypeorm';
import { FindDemandByIdRepositoryTypeorm } from 'src/database/typeorm/repositories/demand/findDemandById/FindDemandByIdRepositoryTypeorm';
import { FindServicesByIdsRepositoryTypeorm } from 'src/database/typeorm/repositories/service/findServicesByIds/FindServicesByIdsRepositoryTypeorm';
import { EditDemandUseCase } from 'src/domain/modules/demand/useCases/editDemand/EditDemandUseCase';
@Injectable()
export class EditDemandUseCaseNestjs extends EditDemandUseCase {
  constructor(
    findServiceByIdsRepositoryTypeorm: FindServicesByIdsRepositoryTypeorm,
    findDemandByIdRepositoryTypeorm: FindDemandByIdRepositoryTypeorm,
    editDemandRepositoryTypeorm: EditDemandRepositoryTypeorm,
  ) {
    super(
      findServiceByIdsRepositoryTypeorm,
      findDemandByIdRepositoryTypeorm,
      editDemandRepositoryTypeorm,
    );
  }
}
