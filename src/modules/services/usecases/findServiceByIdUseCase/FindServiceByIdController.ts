import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindServiceByIdServiceUseCase } from "./FindServiceByIdUsecase";


class FindServiceByIdController {
  async handle(request:Request, response:Response):Promise<Response>{
    const {id} = request.params
    
    const findServiceByIdServiceUseCase = container.resolve(FindServiceByIdServiceUseCase)

    const service =  await findServiceByIdServiceUseCase.execute(id)

    return response.json(service)
    
  }
}

export {FindServiceByIdController}