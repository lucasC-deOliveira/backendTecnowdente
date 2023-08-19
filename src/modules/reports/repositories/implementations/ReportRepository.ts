import { Between, In, Repository } from "typeorm";
import { Demand } from "../../../demand/entities/Demand";
import { ICreateReportDTO } from "../../dtos/create";
import { Reports } from "../../entities/report";
import AppDataSource  from "../../../../database"



class ReportRepository implements ReportRepository {

  private repository: Repository<Reports>

  private demand_repository: Repository<Demand>

  constructor() {
    this.repository = AppDataSource.getRepository(Reports);
    this.demand_repository = AppDataSource.getRepository(Demand);
  }

  async create({ to, from, client_id }: ICreateReportDTO): Promise<void> {
    const manager = this.repository.manager
    await manager.transaction(async (transactionalEntityManager) => {
      const report = this.repository.create({
        to,
        from,
        client_id,
        status: "PENDENTE"
      })

      const demands = await this.demand_repository.find({
        where: {
          client_id,
          state: "Entregue",
          receivement: Between(new Date(from), new Date(to)),
          report_id: null
        }
      })

      const demands_ids = demands.map(demand => demand.id)

      await transactionalEntityManager.save(report)

      await transactionalEntityManager.update(Demand, { id: In(demands_ids) }, { report_id: report.id })

    })

  }

  async list(): Promise<Reports[]> {
    return await this.repository.find({ relations: ["client"] })
  }

  async listByID(id: string): Promise<any> {
    const report = await this.repository.findOne({ where: { id }, relations: ["client"] })
    let demands: Demand[]

    if (report) {
      demands = await this.demand_repository.find({
        relations: ['services'],
        where: {
          report_id: id
        }
      })

      report.demands = demands

      return report
    }
    return null
  }

  async markAsFinished(id: string): Promise<void> {
    const report = await this.repository.findOneBy({ id })

    if (report?.id) {
      const manager = this.repository.manager
      await manager.transaction(async (transactionalEntityManager) => {
        const demands = await this.demand_repository.find({ where: { report_id: report.id } })
        if (demands.length > 0) {
          await transactionalEntityManager.update(Demand, { id: In(demands.map(demand => demand.id)) }, { state: "Finalizado" })
        }
        await transactionalEntityManager.update(Reports, { id }, { status: "Finalizado" })
      })
    }
  }

  async delete(id: string): Promise<void> {
    const report = await this.repository.findOneBy({ id })

    if (report) {
      const manager = this.repository.manager
      await manager.transaction(async (transactionalEntityManager) => {
        const demands = await this.demand_repository.find({ where: { report_id: report.id } })
        if (demands.length > 0) {
          await transactionalEntityManager.update(Demand, { id: In(demands?.map(demand => demand.id)) }, { report_id: null })
        }
        await transactionalEntityManager.delete(Reports, { id })
      })
    }
  }

}

export { ReportRepository }