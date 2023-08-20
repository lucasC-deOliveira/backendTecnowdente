import { EditDemandUseCase } from "./EditDemandUseCase";
import { Request, Response } from "express"
import { container } from "tsyringe"

class EditDemandController {


    async handle(request: Request, response: Response): Promise<Response> {
        const { id, client_id, patient, services, type, deadline, state, amount, observations } = request.body

        const editDemandUseCase = container.resolve(EditDemandUseCase)

        await editDemandUseCase.execute(
            {
                id,
                client_id,
                patient,
                services,
                type,
                deadline,
                state,
                amount,
                observations
            })


        return response.status(201).send();
    }
}

export { EditDemandController }