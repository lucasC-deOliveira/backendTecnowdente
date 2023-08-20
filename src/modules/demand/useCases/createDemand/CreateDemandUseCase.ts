import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
import { IServicesRepository } from "../../../services/repositories/IServicesRepository";
import { IDemandsRepository } from "../../repositories/IDemandsRepository";

interface IRequest {
    client_id: string;
    patient: string;
    type: string;
    deadline: Date;
    state: string;
    services?: string[]
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

        const searchedServices = await this.servicesRepository.findByIds(services)

        if (searchedServices.length <= 0 || searchedServices.length !== services.length) {
            throw new AppError("Service not founded")
        }

        const amount = searchedServices.reduce((acc, service) => {
            return acc + Number(service.amount)
        }, 0)

        const demand = await this.demandsRepository.create({
            client_id,
            patient,
            services: searchedServices,
            type,
            deadline,
            state,
            amount,
            observations
        })

        return demand
    }
}


export { CreateDemandUseCase }