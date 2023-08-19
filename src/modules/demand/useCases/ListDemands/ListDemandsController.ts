import { ListDemandsUseCase } from "./ListDemandsUseCase";
import { Request, Response } from "express";
import { container } from "tsyringe"


class ListDemandsController {


    async handle(request: Request, response: Response): Promise<Response> {
        const { page } = request.query

        const listDemandsUseCase = container.resolve(ListDemandsUseCase)

        const allDemands = await listDemandsUseCase.execute(Number(page))

        return response.json(allDemands);
    }
}

export { ListDemandsController }