import { Repository } from 'typeorm';
import { FindClientByIdRepository } from '../../../../../domain/modules/clients/repositories/findClientById/FindClientByIdRepository';
import { ClientEntity } from '../../../../../domain/modules/clients/entities/ClientEntity';
import { ClientEntityTypeorm } from '../../../entities/client/ClientEntityTypeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class FindClientByIdRepositoryTypeorm extends FindClientByIdRepository {
  constructor(
    @InjectRepository(ClientEntityTypeorm)
    private readonly clientRepository: Repository<ClientEntityTypeorm>,
  ) {
    super();
  }
  async run(id: string): Promise<ClientEntity> {
    return await this.clientRepository.findOneBy({ id });
  }
}
