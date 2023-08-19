import { Request, Response } from "express"
import {container} from "tsyringe"
import { CreateClientUseCase } from "./CreateClientUseCase";


class CreateClientController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { name, cnpj } = request.body;
        const createClientUseCase = container.resolve(CreateClientUseCase)

        
        await createClientUseCase.Execute({name,cnpj});
        

        return response.status(201).send()

    }
}

export { CreateClientController }