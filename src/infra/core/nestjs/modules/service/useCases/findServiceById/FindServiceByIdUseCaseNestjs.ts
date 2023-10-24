import { Injectable } from '@nestjs/common';
import { FindServiceByIdRepositoryTypeorm } from 'src/database/typeorm/repositories/service/findServiceById/FindServiceByIdRepositoryTypeorm';
import { FindServiceByIdUseCase } from 'src/domain/modules/service/usecases/findServiceByIdUseCase/FindServiceByIdUsecase';

@Injectable()
export class FindServiceByIdUseCaseNestjs extends FindServiceByIdUseCase {
  constructor(
    findServiceByIdRepositoryTypeorm: FindServiceByIdRepositoryTypeorm,
  ) {
    super(findServiceByIdRepositoryTypeorm);
  }
}
