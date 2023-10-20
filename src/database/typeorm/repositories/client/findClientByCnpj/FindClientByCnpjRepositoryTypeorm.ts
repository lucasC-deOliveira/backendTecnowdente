import { Repository } from 'typeorm';
import { FindClientByCnpjRepository } from '../../../../../domain/modules/clients/repositories/findClientByCnpj/FindClientByCnpjRepository';
import { ClientEntityTypeorm } from '../../../entities/client/ClientEntityTypeorm';
import { ClientEntity } from '../../../../../domain/modules/clients/entities/ClientEntity';

export class FindClientByCnpjRepositoryTypeorm extends FindClientByCnpjRepository {
  constructor(private clientRepository: Repository<ClientEntityTypeorm>) {
    super();
  }
  async run(cnpj: string): Promise<ClientEntity> {
    const client = await this.clientRepository.findOneBy({ cnpj });

    return client;
  }
}
