import { inject, injectable } from "tsyringe";
import { Reports } from "../../entities/report";
import { IReportRepository } from "../../repositories/IReportRepository";


@injectable()
class ListReportUseCase {

  constructor(
    @inject("ReportsRepository")
    private reportsRepository: IReportRepository
  ) { }

  async execute(): Promise<Reports[]> {

    return await this.reportsRepository.list()

  }

}

export { ListReportUseCase }