import { RemoveDemandUseCase } from "./RemoveDemandUseCase";
import { Request, Response } from "express"

import { container } from "tsyringe"


class RemoveDemandController {


    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params

        const removeDemandUseCase = container.resolve(RemoveDemandUseCase)

        await removeDemandUseCase.execute(id)

        return response.status(201).send()
    }
}


export { RemoveDemandController }