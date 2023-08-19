import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
import { ClientDTO } from "../../dtos/ClientDTO";
import { IClientsRepository } from "../../repositories/IClientsRepository";

@injectable()
class CreateClientUseCase {

    constructor(
        @inject("ClientsRepository")
        private clientsRepository: IClientsRepository
    ) { }

    async Execute({ name, cnpj }: ClientDTO): Promise<void> {

        const client = {
            name,
            cnpj
        }

        const clientExists = await this.clientsRepository.findByCnpj(cnpj);


        if(clientExists){
            throw new AppError("Client already exists!")
        }

        await this.clientsRepository.create(client)
    }

}


export { CreateClientUseCase }