import { getRepository, Repository } from "typeorm";
import { ServiceDTO } from "../../dtos/ServiceDTO";
import { Service } from "../../entities/service";
import { IServicesRepository } from "../IServicesRepository";
import AppDataSource from "../../../../database"


class ServicesRepository implements IServicesRepository {

  private repository: Repository<Service>

  constructor() {
    this.repository = AppDataSource.getRepository(Service);
  }
  async findById(id: string): Promise<Service> {
    return await this.repository.findOneBy({ id })
  }
  async findByIds(ids: string[]): Promise<Service[]> {
    const services = await this.repository.findByIds(ids)

    return services;
  }

  async create({ name, amount, cost }: ServiceDTO): Promise<Service> {
    const service = this.repository.create({ name, amount, cost });
    await this.repository.save(service);
    return service;
  }
  async listByName(name: string): Promise<Service> {
    const service = await this.repository.findOneBy({ name });
    return service;
  }
  async listAll(): Promise<Service[]> {
    const all = await this.repository.find()
    return all


  }
  async remove(id: string): Promise<void> {
    const service = await this.repository.findOneBy({ id })
    await this.repository.remove(service)
  }
  async change(id: string, service: ServiceDTO): Promise<Service> {
    await this.remove(id)

    Object.assign(service, {
      id: id
    })

    const editedService = this.create(service)
    return editedService
  }

}

export { ServicesRepository }