import { ListDemandsRepository } from '../../repositories/listDemands/ListDemandsRepository';
import { ListDemandsUseCaseOutput } from './adapters/output/ListDemandUseCaseOutput';

class ListDemandsUseCase {
  constructor(private listDemandsRepository: ListDemandsRepository) {}

  async execute(page: number): Promise<ListDemandsUseCaseOutput> {
    const demands = await this.listDemandsRepository.run(page);

    const parsedDemands = demands.map((demand) => ({
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
    }));
    // LEMBRA De Arrumar
    const totalItens = 0;
    return { totalItens, demands: parsedDemands };
  }
}

export { ListDemandsUseCase };
