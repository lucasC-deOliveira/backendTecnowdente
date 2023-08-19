import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";

interface IRequest {
  demand_id: string,
  service_id: string
}


@injectable()
class CreateDemandServiceUseCase{
  constructor(
    @inject("DemandsRepository")
    private demandRepository,
    @inject("ServicesRepository")
    private serviceRepository
  ) { }

  async execute({ demand_id, service_id }: IRequest) {
    const demandExist = await this.demandRepository.findById(demand_id)
    console.log("service",demandExist)

    if (!demandExist) {
      throw new AppError("Demand does not exists")
    }

    const services = await this.serviceRepository.findByIds(service_id)

    demandExist.services = services

    await this.demandRepository.create(demandExist)

    return demandExist
  }
}

export {CreateDemandServiceUseCase}