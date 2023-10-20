import { Injectable } from '@nestjs/common';
import { CreateClientRepositoryTypeorm } from 'src/database/typeorm/repositories/client/createClient/CreateClientRepositoryTypeorm';
import { FindClientByCnpjRepositoryTypeorm } from 'src/database/typeorm/repositories/client/findClientByCnpj/FindClientByCnpjRepositoryTypeorm';
import { CreateClientUseCase } from 'src/domain/modules/clients/useCases/createClient/CreateClientUseCase';

@Injectable()
export class CreateClientUseCaseNestjs extends CreateClientUseCase {
  constructor(
    findClientByCnpjRepositoryTypeorm: FindClientByCnpjRepositoryTypeorm,
    createClientRepositoryTypeorm: CreateClientRepositoryTypeorm,
  ) {
    super(findClientByCnpjRepositoryTypeorm, createClientRepositoryTypeorm);
  }
}
