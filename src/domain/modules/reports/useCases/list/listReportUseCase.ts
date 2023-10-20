import { ReportEntity } from '../../entities/reportEntity';
import { ListReportRepository } from '../../repositories/listReport/ListReportRepository';

class ListReportUseCase {
  constructor(private listReportRepository: ListReportRepository) {}

  async execute(): Promise<ReportEntity[]> {
    return await this.listReportRepository.run();
  }
}

export { ListReportUseCase };
