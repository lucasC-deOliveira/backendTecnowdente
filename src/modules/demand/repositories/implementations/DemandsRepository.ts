import { Repository } from "typeorm";
import AppDataSource from "../../../../database"
import { Demand } from "../../entities/Demand";
import { ICreateDemandsDTO, IDemandsRepository, IListDemandsDTO } from "../IDemandsRepository";

class DemandsRepository implements IDemandsRepository {

    private repository: Repository<Demand>

    constructor() {
        this.repository = AppDataSource.getRepository(Demand);
    }

    async create({ client_id, patient, services, type, deadline, state, amount }: ICreateDemandsDTO): Promise<void> {

        const demand = this.repository.create({
            client_id,
            patient,
            services,
            type,
            deadline,
            state,
            amount
        })


        await this.repository.save(demand)
    }

    async list(page): Promise<IListDemandsDTO> {
        const limit = 5

        if (!page) {
            page = 1
        }

        const offset = (limit * page) - limit

        const demandsQuery = this.repository.createQueryBuilder('c').take(limit).innerJoinAndSelect(
            "c.client",
            "client",
        ).leftJoinAndSelect(
            "c.services",
            "services_demands"
        ).orderBy("c.receivement")


        if (page > 1) {
            demandsQuery.skip(offset)
        }

        const demands = await demandsQuery.getMany();

        const totalItens = await this.repository.count()

        return {
            demands,
            totalItens
        };
    }

    async findById(id: string): Promise<Demand> {
        const demand = await this.repository.findOne({ where: { id }, relations: ["services", "client"] });

        return demand
    }

    async remove(id: string): Promise<void> {

        const demand = await this.repository.findOneBy({ id })

        await this.repository.remove(demand)

    }

    async change(id: string, { client_id, patient, services, type, deadline, state, amount }: ICreateDemandsDTO): Promise<void> {

        const demand = await this.repository.findOneBy({ id })

        await this.remove(id)

        const newDemand = this.repository.create({
            id: id,
            client_id,
            patient,
            services,
            type,
            deadline,
            state,
            amount,
            receivement: demand.receivement
        })


        await this.repository.save(newDemand)

    }

    async report(client_id: string): Promise<Demand[]> {
        const demands = this.repository.createQueryBuilder('c').leftJoinAndSelect(
            "c.services",
            "services_demands"
        ).where("c.client_id = :client_id and c.state = :state", { client_id, state: "Entregue" }).getMany()

        return demands
    }

}

export { DemandsRepository }