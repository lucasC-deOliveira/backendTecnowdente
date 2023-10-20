import { AppError } from '../../../../errors/AppError';
import { EditDemandUseCaseInput } from './adapters/input/EditDemandUseCaseInput';
import { FindServiceByIdsRepository } from '../../../service/repositories/findServicesByIds/FindServiceByIdsRepository';
import { FindDemandByIdRepository } from '../../repositories/findDemandById/FindDemandByIdRepository';
import { EditDemandRepository } from '../../repositories/editDemand/EditDemandRepository';

class EditDemandUseCase {
  constructor(
    private readonly findServiceByIdsRepository: FindServiceByIdsRepository,
    private readonly findDemandByIdRepository: FindDemandByIdRepository,
    private readonly editDemandRepository: EditDemandRepository,
  ) {}

  async execute({
    id,
    client_id,
    patient,
    services,
    type,
    deadline,
    state,
    observations,
  }: EditDemandUseCaseInput): Promise<void> {
    const demand = this.findDemandByIdRepository.run(id);

    if (!demand) {
      new AppError('Demand does not exists');
    }
    if (!services) {
      throw new AppError('At least one service must be provided');
    }

    const searchedServices = await this.findServiceByIdsRepository.run(
      services.map((service) => service.id),
    );

    const parsedDeadLine = new Date(deadline);

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

    await this.editDemandRepository.run({
      id,
      client_id,
      patient,
      services: services,
      type,
      deadline: parsedDeadLine,
      state,
      amount: Number(amount),
      observations,
      cost,
    });
  }
}

export { EditDemandUseCase };
