import { CreateDemandUseCase } from "./CreateDemandUseCase";
import { Request, Response } from "express"
import { container } from "tsyringe"


class CreateDemandController {

    async handle(request: Request, response: Response): Promise<Response> {
        const { client_id, patient, type, deadline, services, state, amount } = request.body;

        const createDemandUseCase = container.resolve(CreateDemandUseCase)

        const demand = await createDemandUseCase.execute({ client_id, patient, services, type, deadline, state })

        return response.status(201).json(demand);
    }
}


export { CreateDemandController }