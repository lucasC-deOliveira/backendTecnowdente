import { AppError } from '../../../../errors/AppError';
import { FindDemandByIdRepository } from '../../repositories/findDemandById/FindDemandByIdRepository';
import { GetDemandByIdUseCaseOutput } from './adapters/output/GetDemandByIdUseCaseOutput';
import { BaseService } from '../../../../base/baseService/baseService';

export class GetDemandByIdUseCase extends BaseService {
  constructor(private findDemandByIdRepository: FindDemandByIdRepository) {
    super();
  }

  async execute(id: string): Promise<GetDemandByIdUseCaseOutput> {
    if (!id) {
      throw new AppError('you must provide a valid id!');
    }

    const demand = await this.findDemandByIdRepository.run(id);

    if (!demand) {
      throw new AppError('demand not exist');
    }

    const parsedDemands = {
      id: demand.id,
      patient: demand.patient,
      type: demand.type,
      deadline: demand.deadline,
      state: demand.state,
      amount: demand.amount,
      cost: demand.cost,
      observations: demand.observations,
      receivement: demand.receivement,
      client: demand.client,
      services: demand.services.map((service) => {
        const serviceDetails = demand.servicesDetails.find(
          (detail) => detail.service_id === service.id,
        );

        return {
          ...service,
          quantity: serviceDetails.quantity,
        };
      }),
    };
    return parsedDemands;
  }
}
