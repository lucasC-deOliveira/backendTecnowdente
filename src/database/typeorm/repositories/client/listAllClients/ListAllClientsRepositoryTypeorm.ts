import { FindManyOptions, Repository } from 'typeorm';
import { ListAllClientsRepository } from '../../../../../domain/modules/clients/repositories/listAllClients/ListAllClientsRepository';
import { ClientEntityTypeorm } from '../../../entities/client/ClientEntityTypeorm';
import { ClientEntity } from '../../../../../domain/modules/clients/entities/ClientEntity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ListAllClientsRepositoryTypeorm extends ListAllClientsRepository {
  constructor(
    @InjectRepository(ClientEntityTypeorm)
    private readonly clientRepository: Repository<ClientEntityTypeorm>,
  ) {
    super();
  }
  async run(page): Promise<ClientEntity[]> {
    const limit = 5;

    const offset = limit * page - limit;

    const findOptions: FindManyOptions = {
      where: {
        active: true,
      },
    };

    if (page) {
      (findOptions.skip = offset > 1 ? offset : 0), (findOptions.take = limit);
    }
    return await this.clientRepository.find(findOptions);
  }
}
