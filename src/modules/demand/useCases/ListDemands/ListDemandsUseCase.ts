import { inject, injectable } from "tsyringe";
import { IDemandsRepository, IListDemandsDTO } from "../../repositories/IDemandsRepository";

@injectable()
class ListDemandsUseCase {
    constructor(
        @inject("DemandsRepository")
        private demandsRepository: IDemandsRepository) { }

    async execute(page: number): Promise<any> {
        const { demands, totalItens } = await this.demandsRepository.list(page)

        const parsedDemands = demands.map(demand => ({
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

        }))



        return { totalItens, demands: parsedDemands }
    }
}

export { ListDemandsUseCase }