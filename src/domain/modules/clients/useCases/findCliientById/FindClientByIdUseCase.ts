import { BaseService } from 'src/domain/base/baseService/baseService';
import { FindClientByIdRepository } from '../../repositories/findClientById/FindClientByIdRepository';
import { ClientEntity } from '../../entities/ClientEntity';
import { AppError } from 'src/domain/errors/AppError';

export class FindClientByIdUseCase extends BaseService {
  constructor(private findClientByIdRepository: FindClientByIdRepository) {
    super();
  }

  async execute(id: string): Promise<ClientEntity> {
    const client = await this.findClientByIdRepository.run(id);

    if (!client) {
      throw new AppError('Client does not found');
    }

    return client;
  }
}
