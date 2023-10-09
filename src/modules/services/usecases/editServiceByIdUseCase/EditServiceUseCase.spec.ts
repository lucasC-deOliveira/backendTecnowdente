import { AppError } from "../../../../errors/AppError"
import { ServiceRepositoryInMemory } from "../../repositories/in-memory/ServiceRepositoryInMemory"
import { CreateServiceUseCase } from "../CreateServiceUseCase/CreateServiceUseCase"
import { EditServiceUseCase } from "./EditServiceUseCase"



let editServiceUseCase: EditServiceUseCase
let createServiceUseCase: CreateServiceUseCase
let serviceRepository: ServiceRepositoryInMemory

describe("Edit Service", () => {

  beforeEach(() => {
    serviceRepository = new ServiceRepositoryInMemory()
    createServiceUseCase = new CreateServiceUseCase(serviceRepository)
    editServiceUseCase = new EditServiceUseCase(serviceRepository)
  })

  it("should be able to edit a service", async () => {

    const {id}= await createServiceUseCase.execute({
      name: "PPR",
      amount: 500
    })

    const service = {
      id:id,
      name: "PPA",
      amount: 300
    }

    const editedService = await editServiceUseCase.execute(service.id, service)

    expect(editedService).toEqual(service)

  })

  it("shouldn't be able to create a service with a existent name",()=>{
    expect(async ()=>{
      await createServiceUseCase.execute({
        name: "PPR",
        amount: 500
      })
      const {id}= await createServiceUseCase.execute({
        name: "PPA",
        amount: 500
      })


      const service = {
        id:id,
        name: "PPR",
        amount: 300
      }
  
      await editServiceUseCase.execute(service.id, service)
      
    }).rejects.toBeInstanceOf(AppError)
  })

  
})