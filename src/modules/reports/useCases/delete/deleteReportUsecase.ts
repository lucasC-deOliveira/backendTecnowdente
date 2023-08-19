import { inject, injectable } from "tsyringe";
import { IReportRepository } from "../../repositories/IReportRepository";
import { AppError } from "../../../../errors/AppError";

@injectable()
export class DeleteReportUseCase {
  constructor(
    @inject("ReportsRepository")
    private reportsRepository: IReportRepository
  ) { }
  async execute(id: string): Promise<void> {
    const report = await this.reportsRepository.listByID(id)
    if (!report) {
      throw new AppError("Report not found")
    }

    await this.reportsRepository.delete(id)
  }
}