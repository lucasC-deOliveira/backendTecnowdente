import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
import { ServiceDTO } from "../../dtos/ServiceDTO";
import { Service } from "../../entities/service";
import { IServicesRepository } from "../../repositories/IServicesRepository";

@injectable()
class CreateServiceUseCase{

  constructor(
    @inject("ServicesRepository")
    private serviceRepository: IServicesRepository
  ){}

  async execute({name,amount}:ServiceDTO):Promise<Service>{

    const serviceExists = await this.serviceRepository.listByName(name)

    
    if(serviceExists){
      throw new AppError("service Already Exists")
    }

    const service = await this.serviceRepository.create({
      name,
      amount
    })

    return service
    
  }
}

 export{CreateServiceUseCase}