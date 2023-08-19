import { inject, injectable } from "tsyringe";
import { IClientsRepository } from "../../repositories/IClientsRepository";


@injectable()
class RemoveClientUseCase{

constructor(
    @inject("ClientsRepository")
    private clientsRepository:IClientsRepository
){}

async execute(id:string):Promise<void>{

    const clientExists = await this.clientsRepository.findById(id)


    if(!clientExists){
        throw new Error("Client Doesn't not exists")
    }

    await this.clientsRepository.remove(id)
}

}

export {RemoveClientUseCase}