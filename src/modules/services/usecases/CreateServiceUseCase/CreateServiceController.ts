import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateServiceUseCase } from "./CreateServiceUseCase";


class CreateServiceController{
  async handle(request:Request, response:Response):Promise<Response>{
    const {name, amount, cost} = request.body
    
    const createServiceUseCase = container.resolve(CreateServiceUseCase)

    await createServiceUseCase.execute({name, amount, cost})

    return response.status(201).send();
    
  }
}

export {CreateServiceController}