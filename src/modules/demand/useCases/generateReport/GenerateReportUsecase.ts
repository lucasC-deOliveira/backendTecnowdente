import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";

@injectable()
export class GenerateReportUseCase {

  constructor(
    @inject("DemandsRepository")
    private demandRepository
  ) {
  }

  async execute(client_id: string) {

    if (!client_id) {
      throw new AppError("client_id must be provided")
    }

    return await this.demandRepository.report(client_id)
  }
}