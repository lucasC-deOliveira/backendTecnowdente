import { Request, Response } from "express";
import { container } from "tsyringe"
import { CreateReportUseCase } from "./createReportUseCase";

class CreateReportController {

  async handle(request: Request, response: Response): Promise<Response> {
    const {
      to,
      from,
      client_id
    } = request.body


    const createReportUseCase = container.resolve(CreateReportUseCase)

    await createReportUseCase.execute({
      to,
      from,
      client_id
    });

    return response.status(201).send();

  }


}

export { CreateReportController }