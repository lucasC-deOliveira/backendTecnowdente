import {Request, Response} from "express"
import { container } from "tsyringe"
import { ListAllClientsUseCase } from "./ListAllClientsUseCase"



class ListAllClientsController{

    async handle(request:Request, response:Response):Promise<Response>{

        const listAllClientsUseCase = container.resolve(ListAllClientsUseCase)

        const clients = await listAllClientsUseCase.execute()

        return response.json(clients)


    }
}


export {ListAllClientsController}