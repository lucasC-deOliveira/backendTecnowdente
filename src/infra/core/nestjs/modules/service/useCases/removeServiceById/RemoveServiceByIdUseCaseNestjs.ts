import { Injectable } from '@nestjs/common';
import { DesativeServiceByIdRepositoryTypeorm } from 'src/database/typeorm/repositories/service/desativeServiceById/DesativeServiceByIdRepositoryTypeorm';
import { FindServiceByIdRepositoryTypeorm } from 'src/database/typeorm/repositories/service/findServiceById/FindServiceByIdRepositoryTypeorm';
import { RemoveServiceByIdUseCase } from 'src/domain/modules/service/usecases/RemoveServiceByIdUseCase/RemoveServiceUseCase';

@Injectable()
export class RemoveServiceByIdUseCaseNestjs extends RemoveServiceByIdUseCase {
  constructor(
    findServiceByIdRepositoryTypeorm: FindServiceByIdRepositoryTypeorm,
    desativeServiceByIdRepositoryTypeorm: DesativeServiceByIdRepositoryTypeorm,
  ) {
    super(
      findServiceByIdRepositoryTypeorm,
      desativeServiceByIdRepositoryTypeorm,
    );
  }
}
