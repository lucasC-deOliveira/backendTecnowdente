import { Service } from "../../entities/service"
import { ServiceRepositoryInMemory } from "../../repositories/in-memory/ServiceRepositoryInMemory"
import { ListServiceUseCase } from "./ListServiceUseCase"


let listServiceUseCase: ListServiceUseCase
let serviceRepository: ServiceRepositoryInMemory

describe("ListServices", () => {

  beforeEach(() => {
    serviceRepository = new ServiceRepositoryInMemory()
    listServiceUseCase = new ListServiceUseCase(serviceRepository)
  })

  it('should be able to list all services', async () => {
    
   const service = await serviceRepository.create({
      name: "PPA",
      amount: 300
    })

    const services = await listServiceUseCase.execute()


    expect(services).toEqual([service])
  })
})