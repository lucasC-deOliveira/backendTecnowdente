import { Injectable } from '@nestjs/common';
import { EditClientRepositoryTypeorm } from 'src/database/typeorm/repositories/client/editClient/EditClientRepositoryTypeorm';
import { FindClientByCnpjRepositoryTypeorm } from 'src/database/typeorm/repositories/client/findClientByCnpj/FindClientByCnpjRepositoryTypeorm';
import { FindClientByIdRepositoryTypeorm } from 'src/database/typeorm/repositories/client/findClientById/FindClientByIdRepositoryTypeorm';
import { EditClientUseCase } from 'src/domain/modules/clients/useCases/editClient/EditClientUseCase';

@Injectable()
export class EditClientUseCaseNestjs extends EditClientUseCase {
  constructor(
    findClientByIdRepositoryTypeorm: FindClientByIdRepositoryTypeorm,
    editClientRepositoryTypeorm: EditClientRepositoryTypeorm,
    findClientByCnpjRepositoryTypeorm: FindClientByCnpjRepositoryTypeorm,
  ) {
    super(
      findClientByIdRepositoryTypeorm,
      editClientRepositoryTypeorm,
      findClientByCnpjRepositoryTypeorm,
    );
  }
}
