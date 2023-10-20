import { Injectable } from '@nestjs/common';
import { CreateServiceRepositoryTypeorm } from 'src/database/typeorm/repositories/service/createService/CreateServiceRepositoryTypeorm';
import { FindServiceByNameRepositoryTypeorm } from 'src/database/typeorm/repositories/service/findServiceByName/FindServiceByNameRepositoryTypeorm';
import { CreateServiceUseCase } from 'src/domain/modules/service/usecases/CreateServiceUseCase/CreateServiceUseCase';

@Injectable()
export class CreateServiceUseCaseNestjs extends CreateServiceUseCase {
  constructor(
    readonly findServiceByNameRepositoryTypeorm: FindServiceByNameRepositoryTypeorm,
    readonly createServiceRepositoryTypeorm: CreateServiceRepositoryTypeorm,
  ) {
    super(findServiceByNameRepositoryTypeorm, createServiceRepositoryTypeorm);
  }
}
