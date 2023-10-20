import { BaseService } from '../../../../base/baseService/baseService';
import { DesativeClientByIdRepository } from '../../repositories/desativeClientById/DesativeClientByIdRepository';
import { FindClientByIdRepository } from '../../repositories/findClientById/FindClientByIdRepository';

class RemoveClientUseCase extends BaseService {
  constructor(
    private readonly findClientByIdRepository: FindClientByIdRepository,
    private readonly desativeClientByIdRepository: DesativeClientByIdRepository,
  ) {
    super();
  }

  async execute(id: string): Promise<void> {
    const clientExists = await this.findClientByIdRepository.run(id);

    if (!clientExists) {
      throw new Error("Client Doesn't not exists");
    }

    await this.desativeClientByIdRepository.run(id);
  }
}

export { RemoveClientUseCase };
