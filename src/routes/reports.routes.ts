import { Router } from "express";
import { CreateReportController } from "../modules/reports/useCases/create/createReportController";
import { ensureAuthenticated } from "../shared/http/middlewares/EnsureAuthenticated";
import { ListReportController } from "../modules/reports/useCases/list/listReportController";
import { ListReportByIDController } from "../modules/reports/useCases/listById/listByIdController";
import { MarkReportAsFinishedController } from "../modules/reports/useCases/markAsFinished/markReportAsFinishedController";
import { DeleteReportController } from "../modules/reports/useCases/delete/deleteReportController";

const reportRoutes = Router()

const createReportController = new CreateReportController()

const listReportController = new ListReportController()

const listReportByIdController = new ListReportByIDController()

const markReportAsFinishedController = new MarkReportAsFinishedController()

const deleteReportController = new DeleteReportController()

reportRoutes.put("/:id", ensureAuthenticated, markReportAsFinishedController.handle)

reportRoutes.post("/", ensureAuthenticated, createReportController.handle)

reportRoutes.get("/", ensureAuthenticated, listReportController.handle)

reportRoutes.get("/:id", ensureAuthenticated, listReportByIdController.handle)

reportRoutes.delete("/:id", ensureAuthenticated, deleteReportController.handle)

export { reportRoutes }