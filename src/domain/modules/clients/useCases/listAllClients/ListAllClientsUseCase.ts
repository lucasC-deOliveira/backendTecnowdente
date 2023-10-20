import { ClientEntity } from '../../entities/ClientEntity';
import { ListAllClientsRepository } from '../../repositories/listAllClients/ListAllClientsRepository';
import { BaseService } from '../../../../base/baseService/baseService';

class ListAllClientsUseCase extends BaseService {
  constructor(private listAllClientsRepository: ListAllClientsRepository) {
    super();
  }

  async execute(): Promise<ClientEntity[]> {
    const clients = await this.listAllClientsRepository.run();

    return clients;
  }
}

export { ListAllClientsUseCase };
