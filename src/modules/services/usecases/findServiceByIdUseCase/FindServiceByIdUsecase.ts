import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
import { ServiceDTO } from "../../dtos/ServiceDTO";
import { Service } from "../../entities/service";
import { IServicesRepository } from "../../repositories/IServicesRepository";

@injectable()
class FindServiceByIdServiceUseCase {

  constructor(
    @inject("ServicesRepository")
    private serviceRepository: IServicesRepository
  ) { }

  async execute(id: string): Promise<Service> {

    const service = await this.serviceRepository.findById(id)

    if (!service) {
      throw new AppError("service does not Exists")
    }

    return service

  }
}

export { FindServiceByIdServiceUseCase }