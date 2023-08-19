import { Router } from 'express'
import { CreateDemandController } from '../modules/demand/useCases/createDemand/CreateDemandController';
import { CreateDemandServiceController } from '../modules/demand/useCases/createDemandService/CreateDemandServiceController';
import { EditDemandController } from '../modules/demand/useCases/editDemand/EditDemandController';
import { GenerateReportController } from '../modules/demand/useCases/generateReport/GenerateReportController';
import { ListDemandsController } from '../modules/demand/useCases/ListDemands/ListDemandsController';
import { RemoveDemandController } from '../modules/demand/useCases/removeDemand/RemoveDemandController';
import { ensureAuthenticated } from '../shared/http/middlewares/EnsureAuthenticated';
import { GetDemandByIdController } from '../modules/demand/useCases/getDemandById/GetDemandByIdController';

const demandsRoutes = Router();

const listDemandsController = new ListDemandsController()
demandsRoutes.get("/", ensureAuthenticated, listDemandsController.handle)

const getDemandByIdController = new GetDemandByIdController()
demandsRoutes.get('/:id', ensureAuthenticated, getDemandByIdController.handle)

const createDemandController = new CreateDemandController()
demandsRoutes.post("/", ensureAuthenticated, createDemandController.handle)

const removeDemandController = new RemoveDemandController()
demandsRoutes.delete("/:id", ensureAuthenticated, removeDemandController.handle)

const editDemandController = new EditDemandController()
demandsRoutes.put("/", ensureAuthenticated, editDemandController.handle)

const createDemandServiceController = new CreateDemandServiceController()
demandsRoutes.post("/services/:id", ensureAuthenticated, createDemandServiceController.handle)

const generateReportController = new GenerateReportController()
demandsRoutes.post("/report", ensureAuthenticated, generateReportController.handle)

export { demandsRoutes }