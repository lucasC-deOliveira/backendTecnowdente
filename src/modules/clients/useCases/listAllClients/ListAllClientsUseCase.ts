import { inject, injectable } from "tsyringe";
import { Client } from "../../entities/Client";
import { IClientsRepository } from "../../repositories/IClientsRepository";



@injectable()
class ListAllClientsUseCase {


    constructor(
        @inject("ClientsRepository")
        private clientsRepository: IClientsRepository
    ) { }

    async execute(): Promise<Client[]> {
        const clients = await this.clientsRepository.listAll();

        return clients
    }


}

export {ListAllClientsUseCase}