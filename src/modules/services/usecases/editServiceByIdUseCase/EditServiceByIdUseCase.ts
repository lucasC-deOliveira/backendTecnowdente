import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
import { ServiceDTO } from "../../dtos/ServiceDTO";
import { Service } from "../../entities/service";
import { IServicesRepository } from "../../repositories/IServicesRepository";

@injectable()
class EditServiceByIdUseCase {
  constructor(
    @inject('ServicesRepository')
    private serviceRepository: IServicesRepository
  ) { }
  async execute(id: string, { name, amount, cost }: ServiceDTO):Promise<void> {

    const serviceExists = await this.serviceRepository.findById(id)
    
    if(!serviceExists){
      throw new AppError("Service not found")
    }

     await this.serviceRepository.change(id, { name, amount, cost })
  }
}

export { EditServiceByIdUseCase }