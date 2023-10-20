import { Repository } from 'typeorm';
import { EditClientRepository } from '../../../../../domain/modules/clients/repositories/editClient/EditClientRepository';
import { EditClientRepositoryInput } from '../../../../../domain/modules/clients/repositories/editClient/adapters/input/EdiClientRepositoryInput';
import { ClientEntityTypeorm } from '../../../entities/client/ClientEntityTypeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class EditClientRepositoryTypeorm extends EditClientRepository {
  constructor(
    @InjectRepository(ClientEntityTypeorm)
    private clientRepository: Repository<ClientEntityTypeorm>,
  ) {
    super();
  }
  async run({ cnpj, id, name }: EditClientRepositoryInput): Promise<void> {
    await this.clientRepository.update(id, { name, cnpj });
  }
}
