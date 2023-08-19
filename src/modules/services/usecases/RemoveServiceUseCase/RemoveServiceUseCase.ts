import { IServicesRepository } from "../../repositories/IServicesRepository";


class RemoveServiceUseCase{

  constructor(
    private serviceRepository: IServicesRepository
  ){}
  async execute(id:string):Promise<void>{
    return await this.serviceRepository.remove(id)
  }
}

export {RemoveServiceUseCase}