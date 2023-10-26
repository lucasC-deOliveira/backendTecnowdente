import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ClientEntityTypeorm } from 'src/database/typeorm/entities/client/ClientEntityTypeorm';
import { CountClientsRepository } from 'src/domain/modules/clients/repositories/countClients/CountClientsRepository';
import { Repository } from 'typeorm';

@Injectable()
export class CountClientsRepositoryTypeorm extends CountClientsRepository {
  constructor(
    @InjectRepository(ClientEntityTypeorm)
    private clientRepository: Repository<ClientEntityTypeorm>,
  ) {
    super();
  }

  async run(): Promise<number> {
    return this.clientRepository.count();
  }
}
