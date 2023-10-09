import { Request, Response } from "express";
import { container } from "tsyringe";
import { EditServiceByIdUseCase } from "./EditServiceByIdUseCase";


class EditServiceByIdUController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params

    const { name, amount, cost } = request.body

    const editServiceByIdUseCase = container.resolve(EditServiceByIdUseCase)

    await editServiceByIdUseCase.execute(id, { name, amount: Number(amount), cost: Number(cost) })

    return response.json({
      message: "service ",
      status: 200,
      data: [],
      error: false
    })
  }
}

export { EditServiceByIdUController }