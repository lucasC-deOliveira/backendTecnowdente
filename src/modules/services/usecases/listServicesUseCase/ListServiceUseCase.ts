import { inject, injectable } from "tsyringe";
import { Service } from "../../entities/service";
import { IServicesRepository } from "../../repositories/IServicesRepository";

@injectable()
class ListServiceUseCase {
  constructor(
    @inject('ServicesRepository')
    private servicesRepository: IServicesRepository
  ) {
  }
  async execute():Promise<Service[]> {
    const services = this.servicesRepository.listAll()
    return services
  }
}

export { ListServiceUseCase }