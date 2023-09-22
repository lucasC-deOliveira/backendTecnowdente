import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
import { IServicesRepository } from "../../../services/repositories/IServicesRepository";
import { DemandService, IDemandsRepository } from "../../repositories/IDemandsRepository";

interface IRequest {
    client_id: string;
    patient: string;
    type: string;
    deadline: Date;
    state: string;
    services?: DemandService[]
    observations?: string
}

@injectable()
class CreateDemandUseCase {
    constructor(
        @inject("DemandsRepository")
        private demandsRepository: IDemandsRepository,
        @inject("ServicesRepository")
        private servicesRepository: IServicesRepository
    ) { }

    async execute({ client_id, patient, type, deadline, services, state, observations }: IRequest): Promise<void> {


        if (!services) {
            throw new AppError("At least one service must be provided")
        }

        const searchedServices = await this.servicesRepository.findByIds(services.map(service => service.id))

        if (searchedServices.length <= 0 || searchedServices.length !== services.length) {
            throw new AppError("at least one of the services are invalid!")
        }

        const amount = searchedServices.reduce((acc, service) => {
            const quantity = services.find(selectedService => selectedService.id === service.id).quantity
            return acc + (Number(service.amount) * Number(quantity))
        }, 0)

        const cost = searchedServices.reduce((acc, service) => {
            const quantity = services.find(selectedService => selectedService.id === service.id).quantity
            return acc + (Number(service.cost) * Number(quantity))
        }, 0)

        const demand = await this.demandsRepository.create({
            client_id,
            patient,
            services,
            type,
            deadline,
            state,
            amount,
            observations,
            cost
        })

        return demand
    }
}


export { CreateDemandUseCase }