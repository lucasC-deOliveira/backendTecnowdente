import { container } from "tsyringe"
import { Request, Response } from "express"
import { FindClientByIdUseCase } from "./FindClientByIdUsecase"

export class FindClientByIdController {
  async handle(request: Request, response: Response): Promise<Response> {

    const { id } = request.params


    const findClientByIdUseCase = container.resolve(FindClientByIdUseCase)


    const client = await findClientByIdUseCase.execute(id)


    if (!client) {
      return response.status(404).json({
        data: [],
        error: true,
        message: "Cliente não encontrado!",
        status: 404
      })
    }

    return response.json({
      data: [client],
      error: true,
      message: "Cliente recuperado com sucesso!",
      status: 200
    })



  }
}