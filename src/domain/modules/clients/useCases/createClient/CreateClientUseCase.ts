import { ClientDTO } from '../../adapters/ClientDTO';
import { BaseService } from '../../../../base/baseService/baseService';
import { FindClientByCnpjRepository } from '../../repositories/findClientByCnpj/FindClientByCnpjRepository';
import { CreateClientRepository } from '../../repositories/createClient/CreateClientRepository';
import { CreateClientUseCaseInput } from './adapters/input/CreateClientUseCaseInput';

class CreateClientUseCase extends BaseService {
  constructor(
    private findClientByCnpjRepository: FindClientByCnpjRepository,
    private createClientRepository: CreateClientRepository,
  ) {
    super();
  }

  async Execute({ name, cnpj }: CreateClientUseCaseInput): Promise<void> {
    const client = {
      name,
      cnpj,
    };

    const clientExists = await this.findClientByCnpjRepository.run(cnpj);

    if (clientExists) {
      throw new Error('Client already exists!');
    }

    await this.createClientRepository.run(client);
  }
}

export { CreateClientUseCase };
