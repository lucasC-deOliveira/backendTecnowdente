import { Request, Response } from "express"
import { container } from "tsyringe";
import { GetDemandByIdUseCase } from "./GetDemandByIdUsecase";

export class GetDemandByIdController {

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params

    const getDemandByIdUseCase = container.resolve(GetDemandByIdUseCase)

    if (!id) {
      return response.status(400).json({
        error: true,
        message: "O campo id é obrigatório",
        data: [],
      })
    }

    const demand = await getDemandByIdUseCase.execute(id)

    if (!demand) {
      return response.status(404).json({
        error: true,
        message: "Demanda não encontrada",
        data: [],
      })
    }

    return response.json({
      error: false,
      message: "Demanda recuperada com sucesso !",
      data: [demand]
    })

  }
}