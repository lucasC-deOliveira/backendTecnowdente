import { Repository } from 'typeorm';
import { ListAllClientsRepository } from '../../../../../domain/modules/clients/repositories/listAllClients/ListAllClientsRepository';
import { ClientEntityTypeorm } from '../../../entities/client/ClientEntityTypeorm';
import { ClientEntity } from '../../../../../domain/modules/clients/entities/ClientEntity';

export class ListAllClientsRepositoryTypeorm extends ListAllClientsRepository {
  constructor(
    private readonly clientRepository: Repository<ClientEntityTypeorm>,
  ) {
    super();
  }
  async run(): Promise<ClientEntity[]> {
    return await this.clientRepository.find();
  }
}
