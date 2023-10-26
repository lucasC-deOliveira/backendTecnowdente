import { ServiceEntity } from '../../entities/serviceEntity';
import { CountServiceRepository } from '../../repositories/countServices/CountServicesRepository';
import { ListAllServicesRepository } from '../../repositories/listAllServices/ListAllServicesRepository';
import { BaseService } from 'src/domain/base/baseService/baseService';
import { ListServicesUseCaseOutput } from './adapters/output/ListServicesUseCaseOutput';

class ListAllServiceUseCase extends BaseService {
  constructor(
    private listAllServicesRepository: ListAllServicesRepository,
    private countServiceRepository: CountServiceRepository,
  ) {
    super();
  }
  async execute(page?: number): Promise<ListServicesUseCaseOutput> {
    const services = await this.listAllServicesRepository.run(page);
    const totalServices = await this.countServiceRepository.run();

    return {
      services,
      totalServices,
    };
  }
}

export { ListAllServiceUseCase };
