import { Repository } from 'typeorm';
import { FindClientByCnpjRepository } from '../../../../../domain/modules/clients/repositories/findClientByCnpj/FindClientByCnpjRepository';
import { ClientEntityTypeorm } from '../../../entities/client/ClientEntityTypeorm';
import { ClientEntity } from '../../../../../domain/modules/clients/entities/ClientEntity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class FindClientByCnpjRepositoryTypeorm extends FindClientByCnpjRepository {
  constructor(
    @InjectRepository(ClientEntityTypeorm)
    private clientRepository: Repository<ClientEntityTypeorm>,
  ) {
    super();
  }
  async run(cnpj: string): Promise<ClientEntity> {
    const client = await this.clientRepository.findOneBy({
      cnpj,
      active: true,
    });

    return client;
  }
}
