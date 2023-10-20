import { BaseService } from '../../../../base/baseService/baseService';
import { DesativeServiceByIdRepository } from '../../repositories/desativeServiceById/DesactiveServiceByIdRepository';
import { FindServiceByIdRepository } from '../../repositories/findById/findServiceByIdRepository';

class RemoveServiceByIdUseCase extends BaseService {
  constructor(
    private findServiceByIdRepository: FindServiceByIdRepository,
    private desativeServiceByIdRepository: DesativeServiceByIdRepository,
  ) {
    super();
  }
  async execute(id: string): Promise<void> {
    const serviceExists = await this.findServiceByIdRepository.run(id);

    if (!serviceExists) {
      throw new Error('service does not exist');
    }
    return await this.desativeServiceByIdRepository.run(id);
  }
}

export { RemoveServiceByIdUseCase };
