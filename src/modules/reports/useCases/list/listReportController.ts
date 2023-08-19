import { Request, Response } from "express";
import { container } from "tsyringe"
import { ListReportUseCase } from "./listReportUseCase";

class ListReportController {

  async handle(request: Request, response: Response): Promise<Response> {

    const listReportUseCase = container.resolve(ListReportUseCase)

    const reports = await listReportUseCase.execute();

    return response.status(201).json(reports);

  }

}

export { ListReportController }