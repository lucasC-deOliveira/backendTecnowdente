import { ServiceEntity } from '../../entities/serviceEntity';
import { ListAllServicesRepository } from '../../repositories/listAllServices/ListAllServicesRepository';
import { BaseService } from 'src/domain/base/baseService/baseService';

class ListAllServiceUseCase extends BaseService {
  constructor(private listAllServicesRepository: ListAllServicesRepository) {
    super();
  }
  async execute(): Promise<ServiceEntity[]> {
    const services = await this.listAllServicesRepository.run();
    return services;
  }
}

export { ListAllServiceUseCase };
