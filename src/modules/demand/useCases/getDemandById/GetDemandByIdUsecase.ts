import { inject, injectable } from "tsyringe";
import { IDemandsRepository } from "../../repositories/IDemandsRepository";
import { Demand } from "../../entities/Demand";
import { AppError } from "../../../../errors/AppError";

@injectable()
export class GetDemandByIdUseCase {
  constructor(
    @inject("DemandsRepository")
    private demandsRepository: IDemandsRepository) { }

  async execute(id: string): Promise<Demand> {
    if (!id) {
      throw new AppError("você deve informar o id")
    }

    const demand = await this.demandsRepository.findById(id)

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
      services: demand.services.map(service => {
        const serviceDetails = demand.servicesDetails.find(detail => detail.service_id === service.id)

        return {
          ...service,
          quantity: serviceDetails.quantity
        }
      })

    }
    return parsedDemands
  }
}