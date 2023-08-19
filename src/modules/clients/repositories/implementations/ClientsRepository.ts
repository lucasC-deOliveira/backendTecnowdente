import { getRepository, Repository } from "typeorm";
import { ClientDTO } from "../../dtos/ClientDTO";
import { Client } from "../../entities/Client";
import { IClientsRepository } from "../IClientsRepository";



class ClientsRepository implements IClientsRepository {

    private repository: Repository<Client>

    constructor() {
        this.repository = getRepository(Client);
    }


    async create({ name, cnpj }: ClientDTO): Promise<void> {
        const client = this.repository.create({ name, cnpj })

        await this.repository.save(client)
    }

    async findByCnpj(cnpj: string): Promise<Client> {
        const client = await this.repository.findOne({ cnpj })

        return client
    }


    async findById(id: string): Promise<Client> {
        const client = await this.repository.findOne({ id })

        return client
    }

    async listAll(): Promise<Client[]> {
        const clientsQuery = this.repository.createQueryBuilder("c");

        const clients = await clientsQuery.getMany()

        return clients;
    }


    async remove(id: string): Promise<void> {
        const client = await this.repository.findOne(id)

        await this.repository.remove(client)
    }


    async change(id: string, { name, cnpj }: ClientDTO): Promise<void> {

        await this.repository.update(id,{name,cnpj})
    }



}


export { ClientsRepository }