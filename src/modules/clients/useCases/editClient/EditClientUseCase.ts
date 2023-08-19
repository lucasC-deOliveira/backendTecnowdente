import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
import { ClientDTO } from "../../dtos/ClientDTO";
import { IClientsRepository } from "../../repositories/IClientsRepository";


@injectable()
class EditClientUseCase {

    constructor(
        @inject("ClientsRepository")
        private clientsRepository: IClientsRepository
    ) { }


    async execute(id: string, { name, cnpj }: ClientDTO): Promise<void> {

        const clientExists = await this.clientsRepository.findById(id);

        if (!clientExists) {
            throw new AppError("client doesn't exists")
        }

        await this.clientsRepository.change(id, { name, cnpj })


    }

}


export { EditClientUseCase }