import { Injectable } from '@nestjs/common';
import { CountClientsRepositoryTypeorm } from 'src/database/typeorm/repositories/client/countAllClients/CountClientsRepositoryTypeorm';
import { ListAllClientsRepositoryTypeorm } from 'src/database/typeorm/repositories/client/listAllClients/ListAllClientsRepositoryTypeorm';
import { ListAllClientsUseCase } from 'src/domain/modules/clients/useCases/listAllClients/ListAllClientsUseCase';

@Injectable()
export class ListAllClientUseCaseNestjs extends ListAllClientsUseCase {
  constructor(
    listAllClientsRepositoryTypeorm: ListAllClientsRepositoryTypeorm,
    countClientsRepositoryTypeorm: CountClientsRepositoryTypeorm,
  ) {
    super(listAllClientsRepositoryTypeorm, countClientsRepositoryTypeorm);
  }
}
