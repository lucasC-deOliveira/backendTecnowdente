import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListServiceUseCase } from "./ListServiceUseCase";


class ListServicesController {
  async handle(request: Request, response: Response): Promise<Response> {

    const listServicesUseCase = container.resolve(ListServiceUseCase)

    const services = await listServicesUseCase.execute()

    return response.json(services)
  }
}

export { ListServicesController }