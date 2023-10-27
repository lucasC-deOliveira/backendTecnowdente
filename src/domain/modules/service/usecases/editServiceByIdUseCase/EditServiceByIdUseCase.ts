import { BaseService } from '../../../../base/baseService/baseService';
import { AppError } from '../../../../errors/AppError';
import { EditServiceByIdRepository } from '../../repositories/editServiceById/EditServiceByIdRepository';
import { FindServiceByIdRepository } from '../../repositories/findById/findServiceByIdRepository';
import { FindServiceByNameRepository } from '../../repositories/findServiceByName/FindServiceByNameRepository';
import { EditServiceByIdUseCaseInput } from './adapters/input/EditServiceByIdUserCaseInput';

class EditServiceUseCase extends BaseService {
  constructor(
    private findServiceByIdRepository: FindServiceByIdRepository,
    private editServiceByIdRepository: EditServiceByIdRepository,
    private findServiceByNameRepository: FindServiceByNameRepository,
  ) {
    super();
  }

  async execute({
    id,
    name,
    amount,
    cost,
  }: EditServiceByIdUseCaseInput): Promise<void> {
    const serviceExists = await this.findServiceByIdRepository.run(id);

    if (!serviceExists) {
      throw new AppError('Service not found');
    }

    const serviceWithThisNameExists =
      await this.findServiceByNameRepository.run(name);

    if (serviceWithThisNameExists && name !== serviceExists.name) {
      throw new Error('service Already Exists');
    }

    await this.editServiceByIdRepository.run({ id, name, amount, cost });
  }
}

export { EditServiceUseCase };
