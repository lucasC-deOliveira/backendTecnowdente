import { AppError } from "../../../../errors/AppError"
import { ServiceDTO } from "../../dtos/ServiceDTO"
import { ServiceRepositoryInMemory } from "../../repositories/in-memory/ServiceRepositoryInMemory"
import { CreateServiceUseCase } from "./CreateServiceUseCase"

let createServiceUseCase: CreateServiceUseCase
let serviceRepository: ServiceRepositoryInMemory


describe('Create Service', () => {
  beforeEach(() => {
    serviceRepository = new ServiceRepositoryInMemory()
    createServiceUseCase = new CreateServiceUseCase(serviceRepository)
  })
  it("should be able to add a new service", async () => {

    const service: ServiceDTO = {
      name: "PPA",
      amount: 300
    }

    const createdService = await createServiceUseCase.execute(service)

    expect(createdService).toHaveProperty('id')

  })

  it("should not be able to add a service with a existent name", () => {
    expect(async() => {
      const service: ServiceDTO = {
        name: "PPA",
        amount: 300
      }

  
      await createServiceUseCase.execute(service)
      await createServiceUseCase.execute(service)

      

    }).rejects.toBeInstanceOf(AppError)
  })
})