import { ServiceDTO } from "../dtos/ServiceDTO";
import { Service } from "../entities/service";



interface IServicesRepository {
  create({ name, amount }: ServiceDTO): Promise<Service>
  listByName(name: string): Promise<Service>
  listAll(): Promise<Service[]>
  remove(id: string): Promise<void>
  change(id: string, service: ServiceDTO): Promise<Service>
  findByIds(ids: string[]): Promise<Service[]>
  findById(id: string): Promise<Service>
}

export { IServicesRepository }