import { Between, In, Repository } from "typeorm";
import AppDataSource from "../../../../database"
import { ICreateDemandsDTO, IDemandsRepository, IListDemandsDTO } from "../IDemandsRepository";
import { DemandServiceDetails } from "../../entities/DemandServiceDetails";
import { Demand } from "../../entities/Demand";
class DemandsRepository implements IDemandsRepository {

    private repository: Repository<Demand>

    private demandServiceDetailsRepository: Repository<DemandServiceDetails>

    constructor() {
        this.repository = AppDataSource.getRepository(Demand);
        this.demandServiceDetailsRepository = AppDataSource.getRepository(DemandServiceDetails)
    }

    async create({ client_id, patient, services, type, deadline, state, observations, amount, cost }: ICreateDemandsDTO): Promise<void> {

        const manager = this.repository.manager


        await manager.transaction(async (transactionalEntityManager) => {

            const demand = transactionalEntityManager.create(Demand,{
                amount,
                client_id,
                deadline,
                observations,
                state,
                patient,
                cost,
                type,

            })

            const servicesDetails = services.map(service => this.demandServiceDetailsRepository.create({
               demand_id: demand.id,
               service_id:service.id,
               quantity: service.quantity
            }))


            await manager.save(Demand, demand)

            await manager.save(DemandServiceDetails, servicesDetails)
        })



    }

    async list(page): Promise<IListDemandsDTO> {
        const limit = 5

        if (!page) {
            page = 1
        }

        const offset = (limit * page) - limit

        const demands = await this.repository.find({ relations: ['client','services', 'servicesDetails'], skip: offset > 1 ? offset : 0, take: limit })

        const totalItens = await this.repository.count()

        return {
            demands,
            totalItens
        };
    }

    async findById(id: string): Promise<Demand> {
        const demand = await this.repository.findOne({ where: { id }, relations: [ "client"] });

        return demand
    }

    async remove(id: string): Promise<void> {

        const demand = await this.repository.findOneBy({ id })

        await this.repository.remove(demand)

    }

    async change(id: string, { client_id, patient, services, type, deadline, state, amount, observations }: ICreateDemandsDTO): Promise<void> {

        const demand = await this.repository.findOneBy({ id })

        await this.remove(id)

        // const newDemand = this.repository.create({
        //     id: id,
        //     client_id,
        //     patient,
        //     services,
        //     type,
        //     deadline,
        //     state,
        //     amount,
        //     observations,
        //     receivement: demand.receivement
        // })


        // await this.repository.save(newDemand)

    }

    async report(client_id: string): Promise<Demand[]> {
        const demands = this.repository.createQueryBuilder('c').leftJoinAndSelect(
            "c.services",
            "services_demands"
        ).where("c.client_id = :client_id and c.state = :state", { client_id, state: "Entregue" }).getMany()

        return demands
    }

    async findBetweenReceivement(from: Date, to: Date): Promise<Demand[]> {

        const demands = await this.repository.find({
            where: {
                receivement: Between(from, to)
            },
            relations: ["services"]
        })

        return demands

    }
}

export { DemandsRepository }