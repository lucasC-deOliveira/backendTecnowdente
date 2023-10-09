import { Router } from "express";
import { CreateServiceController } from "../modules/services/usecases/CreateServiceUseCase/CreateServiceController";
import { ListServicesController } from "../modules/services/usecases/listServicesUseCase/ListServicesController";
import { ensureAuthenticated } from "../shared/http/middlewares/EnsureAuthenticated";
import { FindServiceByIdController } from "../modules/services/usecases/findServiceByIdUseCase/FindServiceByIdController";
import { RemoveServiceByIdController } from "../modules/services/usecases/RemoveServiceByIdUseCase/RemoveServiceByIdController";
import { EditServiceByIdUController } from "../modules/services/usecases/editServiceByIdUseCase/EditServiceByIdController";

const serviceRoutes = Router()


const createServiceController = new CreateServiceController()
serviceRoutes.post('/', ensureAuthenticated, createServiceController.handle)

const listServicesController = new ListServicesController()
serviceRoutes.get('/', ensureAuthenticated, listServicesController.handle)

const findServiceByIdController = new FindServiceByIdController()
serviceRoutes.get("/:id", ensureAuthenticated, findServiceByIdController.handle)

const removeServiceByIdController = new RemoveServiceByIdController()
serviceRoutes.delete("/:id", ensureAuthenticated, removeServiceByIdController.handle)

const editServiceByIdController = new EditServiceByIdUController()
serviceRoutes.put('/:id', ensureAuthenticated, editServiceByIdController.handle)

export { serviceRoutes }