import { Request, Response } from "express";
import { container } from "tsyringe";
import { RemoveServiceByIdUseCase } from "./RemoveServiceUseCase";


class RemoveServiceByIdController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params

    const removeServiceByIdUseCase = container.resolve(RemoveServiceByIdUseCase)

    await removeServiceByIdUseCase.execute(id)

    return response.json({
      message: "service removed successfully",
      status: 200,
      data: [],
      error: false
    })
  }
}

export { RemoveServiceByIdController }