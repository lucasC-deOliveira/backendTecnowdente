import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
import { Reports } from "../../entities/report";
import { IReportRepository } from "../../repositories/IReportRepository";

interface IRequest {
  id: string
}
@injectable()
class ListReportByIDUseCase {

  constructor(
    @inject("ReportsRepository")
    private reportsRepository: IReportRepository
  ) { }

  async execute({ id }: IRequest): Promise<Reports> {

    const report = await this.reportsRepository.listByID(id)

    if (!report) {
      throw new AppError('does not exists a report with this id')
    }

    return report
  }

}

export { ListReportByIDUseCase }