import { CreateDemandRepository } from '../../repositories/createDemandRepository/CreateDemandRepository';
import { FindServiceByIdsRepository } from '../../../service/repositories/findServicesByIds/FindServiceByIdsRepository';
import { BaseService } from '../../../../base/baseService/baseService';
import { CreateDemandInput } from './adapters/input/CreateDemandInput';

class CreateDemandUseCase extends BaseService {
  constructor(
    private createDemandRepository: CreateDemandRepository,
    private findServiceByIdsRepository: FindServiceByIdsRepository,
  ) {
    super();
  }

  async execute({
    client_id,
    patient,
    type,
    deadline,
    services,
    state,
    observations,
  }: CreateDemandInput): Promise<void> {
    if (!services) {
      throw new Error('At least one service must be provided');
    }

    const searchedServices = await this.findServiceByIdsRepository.run(
      services.map((service) => service.id),
    );

    if (
      searchedServices.length <= 0 ||
      searchedServices.length !== services.length
    ) {
      throw new Error('at least one of the services are invalid!');
    }

    const amount = searchedServices.reduce((acc, service) => {
      const quantity = services.find(
        (selectedService) => selectedService.id === service.id,
      ).quantity;
      return acc + Number(service.amount) * Number(quantity);
    }, 0);

    const cost = searchedServices.reduce((acc, service) => {
      const quantity = services.find(
        (selectedService) => selectedService.id === service.id,
      ).quantity;
      return acc + Number(service.cost) * Number(quantity);
    }, 0);

    const demand = await this.createDemandRepository.run({
      client_id,
      patient,
      services,
      type,
      deadline,
      state,
      amount,
      observations,
      cost,
    });

    return demand;
  }
}

export { CreateDemandUseCase };
