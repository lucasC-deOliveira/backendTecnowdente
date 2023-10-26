import { Injectable } from '@nestjs/common';
import { CountDemandsRepositoryTypeorm } from 'src/database/typeorm/repositories/demand/countDemand/CountDemandsRepositoryTypeorm';
import { ListDemandsRepositoryTypeorm } from 'src/database/typeorm/repositories/demand/listDemands/ListDemandsRepositoryTypeorm';
import { ListDemandsUseCase } from 'src/domain/modules/demand/useCases/ListDemands/ListDemandsUseCase';
@Injectable()
export class ListDemandUseCaseNestjs extends ListDemandsUseCase {
  constructor(
    listDemandsRepositoryTypeorm: ListDemandsRepositoryTypeorm,
    coundDemandsRepositoryTypeorm: CountDemandsRepositoryTypeorm,
  ) {
    super(listDemandsRepositoryTypeorm, coundDemandsRepositoryTypeorm);
  }
}
