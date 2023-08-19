import { Request, Response } from "express";
import { container } from "tsyringe"
import { MarkReportAsFinishedUseCase } from "./markReportAsFinishedUsecase";

class MarkReportAsFinishedController {

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params

    const markReportAsFinishedUseCase = container.resolve(MarkReportAsFinishedUseCase)

    await markReportAsFinishedUseCase.execute(id );

    return response.status(200)

  }

}

export { MarkReportAsFinishedController }