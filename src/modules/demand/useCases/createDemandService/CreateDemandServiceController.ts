import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateDemandServiceUseCase } from "./CreateDemandServiceUseCase";





class CreateDemandServiceController {

  async handle(request: Request, response: Response) {

    const { id } = request.params;

    const { service_id } = request.body;

    const createDemandServiceUseCase = container.resolve(CreateDemandServiceUseCase)

    const demand = await createDemandServiceUseCase.execute({
      demand_id: id,
      service_id
    })

    return response.status(201).json(demand)

  }

}

export {
  CreateDemandServiceController
}