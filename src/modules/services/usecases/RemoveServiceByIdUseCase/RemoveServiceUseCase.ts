import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
import { IServicesRepository } from "../../repositories/IServicesRepository";

@injectable()
class RemoveServiceByIdUseCase{

  constructor(
    @inject('ServicesRepository')
    private serviceRepository: IServicesRepository
  ){}
  async execute(id:string):Promise<void>{
    const serviceExists = await this.serviceRepository.findById(id)

    if(!serviceExists){
      throw new AppError("service does not exist")
    }

    return await this.serviceRepository.remove(id)
  }
}

export {RemoveServiceByIdUseCase}