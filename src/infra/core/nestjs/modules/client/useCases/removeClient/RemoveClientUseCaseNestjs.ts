import { Injectable } from '@nestjs/common';
import { DesativeClientByIdRepositoryTypeorm } from 'src/database/typeorm/repositories/client/desativeClientById/DesativeClientByIdRepositoryTypeorm';
import { FindClientByIdRepositoryTypeorm } from 'src/database/typeorm/repositories/client/findClientById/FindClientByIdRepositoryTypeorm';
import { RemoveClientUseCase } from 'src/domain/modules/clients/useCases/removeClient/RemoveClientUseCase';

@Injectable()
export class RemoveClientUseCaseNestjs extends RemoveClientUseCase {
  constructor(
    findClientByIdRepositoryTypeorm: FindClientByIdRepositoryTypeorm,
    desativeClientByIdRepositoryTypeorm: DesativeClientByIdRepositoryTypeorm,
  ) {
    super(findClientByIdRepositoryTypeorm, desativeClientByIdRepositoryTypeorm);
  }
}
