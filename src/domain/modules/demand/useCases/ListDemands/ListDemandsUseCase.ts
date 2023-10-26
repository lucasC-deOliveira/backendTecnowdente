import { CountDemandsRepository } from '../../repositories/countDemands/CountDemandsReporitory';
import { ListDemandsRepository } from '../../repositories/listDemands/ListDemandsRepository';
import { ListDemandUseCaseInput } from './adapters/input/ListDemadUseCaseInput';
import { ListDemandsUseCaseOutput } from './adapters/output/ListDemandUseCaseOutput';

class ListDemandsUseCase {
  constructor(
    private listDemandsRepository: ListDemandsRepository,
    private countDemandsRepository: CountDemandsRepository,
  ) {}

  async execute({
    from,
    states,
    to,
    type,
    client_id,
    deadline,
    page,
    patient,
    receivement,
    is_report_null,
  }: ListDemandUseCaseInput): Promise<ListDemandsUseCaseOutput> {
    const demands = await this.listDemandsRepository.run({
      from,
      states,
      to,
      type,
      client_id,
      deadline,
      page,
      patient,
      is_report_null,
      receivement,
    });

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
    const totalItens = await this.countDemandsRepository.run({
      client_id,
      deadline,
      from,
      is_report_null,
      patient,
      receivement,
      states,
      to,
      type,
    });
    return { totalItens, demands: parsedDemands };
  }
}

export { ListDemandsUseCase };
