import { Injectable } from '@nestjs/common';
import { EditServiceByIdRepositoryTypeorm } from 'src/database/typeorm/repositories/service/editServiceById/EditServiceByIdRepositoryTypeorm';
import { FindServiceByIdRepositoryTypeorm } from 'src/database/typeorm/repositories/service/findServiceById/FindServiceByIdRepositoryTypeorm';
import { EditServiceUseCase } from 'src/domain/modules/service/usecases/editServiceByIdUseCase/EditServiceByIdUseCase';

@Injectable()
export class EditServiceUseCaseNestjs extends EditServiceUseCase {
  constructor(
    findServiceByIdRepositoryTypeorm: FindServiceByIdRepositoryTypeorm,
    editServiceByIdRepositoryTypeorm: EditServiceByIdRepositoryTypeorm,
  ) {
    super(findServiceByIdRepositoryTypeorm, editServiceByIdRepositoryTypeorm);
  }
}
