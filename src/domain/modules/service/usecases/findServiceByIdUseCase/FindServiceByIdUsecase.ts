import { FindServiceByIdRepository } from '../../repositories/findById/findServiceByIdRepository';
import { ServiceEntity } from '../../entities/serviceEntity';
import { BaseService } from '../../../../base/baseService/baseService';

class FindServiceByIdUseCase extends BaseService {
  constructor(private findServiceById: FindServiceByIdRepository) {
    super();
  }

  async execute(id: string): Promise<ServiceEntity> {
    const service = await this.findServiceById.run(id);

    if (!service) {
      throw new Error('service does not Exists');
    }

    return service;
  }
}

export { FindServiceByIdUseCase };
