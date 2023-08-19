import { ServiceDTO } from "../../dtos/ServiceDTO";
import { Service } from "../../entities/service";
import { IServicesRepository } from "../IServicesRepository";


class ServiceRepositoryInMemory implements IServicesRepository{
  findByIds(ids: string[]): Promise<Service[]> {
    throw new Error("Method not implemented.");
  }
  findById(id: string): Promise<Service> {
    throw new Error("Method not implemented.");
  }
  
  services: Service[] = []

  async create({ name, amount }: ServiceDTO): Promise<Service> {
    const service = new Service()

    Object.assign(service,{
      name,
      amount
    })
    
    this.services.push(service)

    return service
  }

  async listByName(name: string): Promise<Service> {
    const service = this.services.find(service => service.name === name)
    return service
  }


  async listAll(): Promise<Service[]> {
    const services = this.services
    return  services
  }

  async remove(id: string): Promise<void> {
    const newServices = this.services.filter(service => service.id  !== id)
     this.services = newServices
  }

  
  async change(id: string, service: ServiceDTO): Promise<Service> {
    const services = this.services.filter(service=> service.id !== id)

    this.services = services

    Object.assign(service,{
      id:id
    })

    this.services.push(service)

    return this.services.find(service => service.id === id)
  }
 
  }
  



export {ServiceRepositoryInMemory}