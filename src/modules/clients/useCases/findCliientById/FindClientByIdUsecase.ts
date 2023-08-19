import { inject, injectable } from "tsyringe";
import { IClientsRepository } from "../../repositories/IClientsRepository";
import { Client } from "../../entities/Client";

@injectable()
export class FindClientByIdUseCase {
  constructor(
    @inject("ClientsRepository")
    private clientsRepository: IClientsRepository
  ) { }

  async execute(id: string): Promise<Client> {
    const client = await this.clientsRepository.findById(id)

    return client
  }
}