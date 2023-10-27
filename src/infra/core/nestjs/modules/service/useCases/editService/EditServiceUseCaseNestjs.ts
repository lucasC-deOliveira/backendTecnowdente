import { Injectable } from '@nestjs/common';
import { EditServiceByIdRepositoryTypeorm } from 'src/database/typeorm/repositories/service/editServiceById/EditServiceByIdRepositoryTypeorm';
import { FindServiceByIdRepositoryTypeorm } from 'src/database/typeorm/repositories/service/findServiceById/FindServiceByIdRepositoryTypeorm';
import { FindServiceByNameRepositoryTypeorm } from 'src/database/typeorm/repositories/service/findServiceByName/FindServiceByNameRepositoryTypeorm';
import { EditServiceUseCase } from 'src/domain/modules/service/usecases/editServiceByIdUseCase/EditServiceByIdUseCase';

@Injectable()
export class EditServiceUseCaseNestjs extends EditServiceUseCase {
  constructor(
    findServiceByIdRepositoryTypeorm: FindServiceByIdRepositoryTypeorm,
    editServiceByIdRepositoryTypeorm: EditServiceByIdRepositoryTypeorm,
    findServiceByNameRepositoryTypeorm: FindServiceByNameRepositoryTypeorm,
  ) {
    super(
      findServiceByIdRepositoryTypeorm,
      editServiceByIdRepositoryTypeorm,
      findServiceByNameRepositoryTypeorm,
    );
  }
}
