import { BaseService } from '../../../../base/baseService/baseService';
import { AppError } from '../../../../errors/AppError';
import { EditServiceByIdRepository } from '../../repositories/editServiceById/EditServiceByIdRepository';
import { FindServiceByIdRepository } from '../../repositories/findById/findServiceByIdRepository';
import { EditServiceByIdUseCaseInput } from './adapters/input/EditServiceByIdUserCaseInput';

class EditServiceByIdUseCase extends BaseService {
  constructor(
    private findServiceByIdRepository: FindServiceByIdRepository,
    private editServiceByIdRepository: EditServiceByIdRepository,
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

    await this.editServiceByIdRepository.run({ id, name, amount, cost });
  }
}

export { EditServiceByIdUseCase };
