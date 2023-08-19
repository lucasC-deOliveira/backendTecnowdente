import { Request, Response} from "express"
import { container } from "tsyringe"
import { RemoveClientUseCase } from "./RemoveClientUseCase"



class RemoveClientController{

    async handle(request:Request, response:Response):Promise<Response>{
        
        const {id} = request.params;

        const removeClientUseCase = container.resolve(RemoveClientUseCase);

        await removeClientUseCase.execute(id);

        return response.status(200).send();
        
    }
}

export {RemoveClientController}