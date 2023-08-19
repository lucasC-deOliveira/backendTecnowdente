import { Request, Response } from "express";
import { container } from "tsyringe";
import { GenerateReportUseCase } from "./GenerateReportUsecase";


export class GenerateReportController {

  async handle(req: Request, res: Response) {
    const { client_id } = req.body

    const generateReportUseCase = container.resolve(GenerateReportUseCase)

    const report = await generateReportUseCase.execute(client_id)

    return res.status(200).json({
      reports: report
    })
  }
}