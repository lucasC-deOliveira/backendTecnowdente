import { Request, Response } from "express";
import { container } from "tsyringe"
import { DeleteReportUseCase } from "./deleteReportUsecase";

class DeleteReportController {

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params

    const deleteReportUseCase = container.resolve(DeleteReportUseCase)

    await deleteReportUseCase.execute(id)

    console.log("final")
    return response.status(200)

  }

}

export { DeleteReportController }