import { Injectable } from '@nestjs/common';
import { FindClientByIdRepositoryTypeorm } from 'src/database/typeorm/repositories/client/findClientById/FindClientByIdRepositoryTypeorm';
import { FindClientByIdUseCase } from 'src/domain/modules/clients/useCases/findCliientById/FindClientByIdUseCase';

@Injectable()
export class FindClientByIdUseCaseNestjs extends FindClientByIdUseCase {
  constructor(
    findClientByIdRepositoryTypeorm: FindClientByIdRepositoryTypeorm,
  ) {
    super(findClientByIdRepositoryTypeorm);
  }
}
