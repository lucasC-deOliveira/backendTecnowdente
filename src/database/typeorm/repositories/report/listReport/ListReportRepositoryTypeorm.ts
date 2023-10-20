import { Repository } from 'typeorm';
import { ListReportRepository } from '../../../../../domain/modules/reports/repositories/listReport/ListReportRepository';
import { ReportEntityTypeorm } from '../../../entities/report/reportEntityTypeorm';
import { ReportEntity } from '../../../../../domain/modules/reports/entities/reportEntity';

export class ListReportRepositoryTypeorm extends ListReportRepository {
  constructor(
    private readonly reportRepository: Repository<ReportEntityTypeorm>,
  ) {
    super();
  }
  async run(): Promise<ReportEntity[]> {
    return await this.reportRepository.find({ relations: ['client'] });
  }
}
