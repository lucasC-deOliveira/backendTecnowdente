import { Injectable } from '@nestjs/common';
import { ListAllClientsRepositoryTypeorm } from 'src/database/typeorm/repositories/client/listAllClients/ListAllClientsRepositoryTypeorm';
import { ListAllClientsUseCase } from 'src/domain/modules/clients/useCases/listAllClients/ListAllClientsUseCase';

@Injectable()
export class ListAllClientUseCaseNestjs extends ListAllClientsUseCase {
  constructor(
    listAllClientsRepositoryTypeorm: ListAllClientsRepositoryTypeorm,
  ) {
    super(listAllClientsRepositoryTypeorm);
  }
}
