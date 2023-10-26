import { ReportEntity } from '../../entities/reportEntity';
import { CountReportsRepository } from '../../repositories/countReports/CountReportsRepository';
import { ListReportRepository } from '../../repositories/listReport/ListReportRepository';
import { ListReportsUseCaseOutput } from './adapters/output/ListReportUseCaseOutput';

class ListReportUseCase {
  constructor(
    private listReportRepository: ListReportRepository,
    private countReportsRepository: CountReportsRepository,
  ) {}

  async execute(page?: number): Promise<ListReportsUseCaseOutput> {
    const reports = await this.listReportRepository.run(page);
    const reportsCount = await this.countReportsRepository.run();

    return {
      reports,
      reportsCount,
    };
  }
}

export { ListReportUseCase };
