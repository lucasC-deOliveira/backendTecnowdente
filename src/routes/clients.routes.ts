import { Router } from "express";
import { CreateClientController } from "../modules/clients/useCases/createClient/CreateClientController";
import { EditClientController } from "../modules/clients/useCases/editClient/EditClientController";
import { ListAllClientsController } from "../modules/clients/useCases/listAllClients/ListAllClientsController";
import { RemoveClientController } from "../modules/clients/useCases/removeClient/RemoveClientController";
import { ensureAuthenticated } from "../shared/http/middlewares/EnsureAuthenticated";
import { FindClientByIdController } from "../modules/clients/useCases/findCliientById/FindClientByIdController";


const clientRoutes = Router()

const createClientController = new CreateClientController()



clientRoutes.post("/", ensureAuthenticated, createClientController.handle)


const listAllClientsController = new ListAllClientsController()

clientRoutes.get("/", ensureAuthenticated, listAllClientsController.handle)


const removeClientController = new RemoveClientController()

clientRoutes.delete("/:id", ensureAuthenticated, removeClientController.handle)


const editClientController = new EditClientController()

clientRoutes.put("/", ensureAuthenticated, editClientController.handle)

const findClientByIdController = new FindClientByIdController()

clientRoutes.get("/:id", ensureAuthenticated, findClientByIdController.handle)

export { clientRoutes }