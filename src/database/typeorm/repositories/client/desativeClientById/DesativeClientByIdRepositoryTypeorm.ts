import { Repository } from 'typeorm';
import { DesativeClientByIdRepository } from '../../../../../domain/modules/clients/repositories/desativeClientById/DesativeClientByIdRepository';
import { ClientEntityTypeorm } from '../../../entities/client/ClientEntityTypeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class DesativeClientByIdRepositoryTypeorm extends DesativeClientByIdRepository {
  constructor(
    @InjectRepository(ClientEntityTypeorm)
    private clientRepository: Repository<ClientEntityTypeorm>,
  ) {
    super();
  }
  async run(id: string): Promise<void> {
    await this.clientRepository.update(id, { active: false });
  }
}
