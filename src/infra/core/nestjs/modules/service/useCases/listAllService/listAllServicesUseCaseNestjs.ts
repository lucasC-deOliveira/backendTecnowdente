import { Injectable } from '@nestjs/common';
import { ListAllServicesRepositoryTypeorm } from 'src/database/typeorm/repositories/service/listAllServices/listAlllServicesRepositoryTypeorm';
import { ListAllServiceUseCase } from 'src/domain/modules/service/usecases/listServicesUseCase/ListServiceUseCase';

@Injectable()
export class ListServiceAllUseCaseNestjs extends ListAllServiceUseCase {
  constructor(
    listAllServicesRepositoryTypeorm: ListAllServicesRepositoryTypeorm,
  ) {
    super(listAllServicesRepositoryTypeorm);
  }
}
