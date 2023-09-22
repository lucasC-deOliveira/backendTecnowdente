import { inject, injectable } from "tsyringe";
import { IDemandsRepository } from "../../repositories/IDemandsRepository";
import { DayjsDateProvider } from "../../../../shared/providers/dateProvider/implementations/dateProvider";


export interface IShowDashboardDTO {
    profit: number
    expenses: number
    total: number
    demandsByServices: {
        name: string,
        quantity: number
    }[]
    demandsByState: {
        state: string
        quantity: number
    }[]
}

@injectable()
class ShowDashboardUseCase {
    constructor(
        @inject("DemandsRepository")
        private demandsRepository: IDemandsRepository,
        private dayjsDateProvider: DayjsDateProvider
    ) { }

    async execute(): Promise<IShowDashboardDTO> {
        const from = this.dayjsDateProvider.startOfMonth()

        const to = this.dayjsDateProvider.addMonth(from)

        const demands = await this.demandsRepository.findBetweenReceivement(from, to)

        const expenses = demands.reduce((acc, demands) => {
            acc += demands.cost
            return acc
        }, 0)

        const total = demands.reduce((acc, demands) => {
            acc += demands.amount
            return acc
        }, 0)

        const profit = total - expenses

        const servicesFromAllDemands = demands.flatMap(demand => demand.services)

        const demandsByServices = servicesFromAllDemands.map(service => ({ name: service.name, quantity: servicesFromAllDemands.filter(s => s.name === service.name).length }))
            .filter((demandByService, index, self) => (self.findIndex(d => d.name === demandByService.name) === index))

        const demandsByState = demands.map(demand => ({ state: demand.state, quantity: demands.filter(d => demand.state === d.state).length }))
            .filter((demandByState, index, self) => (self.findIndex(d => d.state === demandByState.state) === index))



        return {
            profit,
            total,
            expenses,
            demandsByServices,
            demandsByState
        }

    }
}

export { ShowDashboardUseCase }