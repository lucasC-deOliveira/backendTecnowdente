import { ClientEntity } from '../../entities/ClientEntity';
import { ListAllClientsRepository } from '../../repositories/listAllClients/ListAllClientsRepository';
import { BaseService } from '../../../../base/baseService/baseService';
import { CountClientsRepository } from '../../repositories/countClients/CountClientsRepository';
import { ListAllClientUseCaseOutput } from './adapters/output/ListAllClientUseCaseOutput';

class ListAllClientsUseCase extends BaseService {
  constructor(
    private listAllClientsRepository: ListAllClientsRepository,
    private countClientsRepository: CountClientsRepository,
  ) {
    super();
  }

  async execute(page?: number): Promise<ListAllClientUseCaseOutput> {
    const clients = await this.listAllClientsRepository.run(page);

    const totalClients = await this.countClientsRepository.run();

    return { clients, totalClients };
  }
}

export { ListAllClientsUseCase };
