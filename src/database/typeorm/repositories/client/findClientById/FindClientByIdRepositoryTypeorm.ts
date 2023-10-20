import { Repository } from 'typeorm';
import { FindClientByIdRepository } from '../../../../../domain/modules/clients/repositories/findClientById/FindClientByIdRepository';
import { ClientEntity } from '../../../../../domain/modules/clients/entities/ClientEntity';
import { ClientEntityTypeorm } from '../../../entities/client/ClientEntityTypeorm';

export class FindClientByIdRepositoryTypeorm extends FindClientByIdRepository {
  constructor(
    private readonly clientRepository: Repository<ClientEntityTypeorm>,
  ) {
    super();
  }
  async run(id: string): Promise<ClientEntity> {
    return await this.clientRepository.findOneBy({ id });
  }
}
