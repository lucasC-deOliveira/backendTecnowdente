import { inject, injectable } from "tsyringe";
import { IServicesRepository } from "../../../services/repositories/IServicesRepository";
import { DemandService, IDemandsRepository } from "../../repositories/IDemandsRepository";
import { AppError } from "../../../../errors/AppError";

interface IRequest {
  id: string
  client_id: string
  patient: string,
  services: DemandService[]
  type: string,
  deadline: string,
  state: string,
  amount: string,
  observations?: string
}


@injectable()
class EditDemandUseCase {

  constructor(
    @inject("DemandsRepository")
    private demandRepository: IDemandsRepository,
    @inject("ServicesRepository")
    private servicesRepository: IServicesRepository
  ) { }


  async execute({ id, client_id, patient, services, type, deadline, state, observations }: IRequest): Promise<void> {
    const demand = this.demandRepository.findById(id);

    if (!demand) {
      new AppError("Demand does not exists")
    }
    if (!services) {
      throw new AppError("At least one service must be provided")
    }

    const searchedServices = await this.servicesRepository.findByIds(services.map(service => service.id))

    const parsedDeadLine = new Date(deadline)

    const amount = searchedServices.reduce((acc, service) => {
      const quantity = services.find(selectedService => selectedService.id === service.id).quantity
      return acc + (Number(service.amount) * Number(quantity))
    }, 0)

    const cost = searchedServices.reduce((acc, service) => {
      const quantity = services.find(selectedService => selectedService.id === service.id).quantity
      return acc + (Number(service.cost) * Number(quantity))
    }, 0)
    console.log("Chegou")
    await this.demandRepository.change(id, {
      client_id,
      patient,
      services: services,
      type,
      deadline: parsedDeadLine,
      state,
      amount: Number(amount),
      observations,
      cost,
    })
    console.log('passou 2')
  }


}


export { EditDemandUseCase }