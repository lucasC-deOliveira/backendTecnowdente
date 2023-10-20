import { Repository } from 'typeorm';
import { DesativeClientByIdRepository } from '../../../../../domain/modules/clients/repositories/desativeClientById/DesativeClientByIdRepository';
import { ClientEntityTypeorm } from '../../../entities/client/ClientEntityTypeorm';

export class DesativeClientByIdRepositoryTypeorm extends DesativeClientByIdRepository {
  constructor(private clientRepository: Repository<ClientEntityTypeorm>) {
    super();
  }
}
