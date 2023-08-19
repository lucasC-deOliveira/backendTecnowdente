import { AppError } from "../../../../errors/AppError";
import { ServiceDTO } from "../../dtos/ServiceDTO";
import { Service } from "../../entities/service";
import { IServicesRepository } from "../../repositories/IServicesRepository";


class EditServiceUseCase {
  constructor(
    private serviceRepository: IServicesRepository
  ) { }
  async execute(id: string, { name, amount }: ServiceDTO):Promise<Service> {

    const nameExist = await this.serviceRepository.listByName(name)

   if (nameExist) {
      throw new AppError("Name Already exists, you can't edit with this name!")
    }

    const service = await this.serviceRepository.change(id, { name, amount })
    return service
  }
}

export { EditServiceUseCase }