import { Repository } from 'typeorm';
import { CreateClientRepository } from '../../../../../domain/modules/clients/repositories/createClient/CreateClientRepository';
import { CreateClientRepositoryInput } from '../../../../../domain/modules/clients/repositories/createClient/adapters/input/CreateClientRepositoryInput';
import { ClientEntityTypeorm } from '../../../entities/client/ClientEntityTypeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CreateClientRepositoryTypeorm extends CreateClientRepository {
  constructor(
    @InjectRepository(ClientEntityTypeorm)
    private clientRepository: Repository<ClientEntityTypeorm>,
  ) {
    super();
  }

  async run({ cnpj, name }: CreateClientRepositoryInput): Promise<void> {
    const client = this.clientRepository.create({ name, cnpj });

    await this.clientRepository.save(client);
  }
}
