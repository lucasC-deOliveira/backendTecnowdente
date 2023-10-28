import { BaseService } from '../../../../base/baseService/baseService';
import { EditClientRepository } from '../../repositories/editClient/EditClientRepository';
import { FindClientByCnpjRepository } from '../../repositories/findClientByCnpj/FindClientByCnpjRepository';
import { FindClientByIdRepository } from '../../repositories/findClientById/FindClientByIdRepository';
import { EditClientInput } from './adapters/input/EditClientInput';

class EditClientUseCase extends BaseService {
  constructor(
    private readonly findClientByIdRepository: FindClientByIdRepository,
    private readonly editClientRepository: EditClientRepository,
    private readonly findClientByCnpjRepository: FindClientByCnpjRepository,
  ) {
    super();
  }

  async execute({ id, name, cnpj }: EditClientInput): Promise<void> {
    const clientExists = await this.findClientByIdRepository.run(id);

    if (!clientExists) {
      throw new Error("client doesn't exists");
    }
    if (cnpj) {
      const clientExistsCNPJ = await this.findClientByCnpjRepository.run(cnpj);

      if (clientExistsCNPJ && cnpj !== clientExists.cnpj) {
        throw new Error('Client already exists!');
      }
    }

    await this.editClientRepository.run({ id, name, cnpj });
  }
}

export { EditClientUseCase };
