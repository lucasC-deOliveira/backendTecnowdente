import { inject, injectable } from "tsyringe";
import { IServicesRepository } from "../../../services/repositories/IServicesRepository";
import { ICreateDemandsDTO, IDemandsRepository } from "../../repositories/IDemandsRepository";

interface IRequest {
  id: string
  client_id: string
  patient: string,
  services: string[]
  type: string,
  deadline: string,
  state: string,
  amount: string
}


@injectable()
class EditDemandUseCase {

  constructor(
    @inject("DemandsRepository")
    private demandRepository: IDemandsRepository,
    @inject("ServicesRepository")
    private servicesRepository: IServicesRepository
  ) { }


  async execute({ id, client_id, patient, services, type, deadline, state, amount }: IRequest): Promise<void> {

    const servicesFromDatabase = await this.servicesRepository.findByIds(services)

    const parsedDeadLine = new Date(deadline)

    await this.demandRepository.change(id, {
      client_id,
      patient,
      services: servicesFromDatabase,
      type,
      deadline: parsedDeadLine,
      state,
      amount: Number(amount)
    })

  }


}


export { EditDemandUseCase }