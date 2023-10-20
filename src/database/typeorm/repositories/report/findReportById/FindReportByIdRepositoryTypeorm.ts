import { Repository } from 'typeorm';
import { FindReportByIdRepository } from '../../../../../domain/modules/reports/repositories/findReportById/FindReportByIdRepository';
import { ReportEntity } from '../../../../../domain/modules/reports/entities/reportEntity';
import { DemandEntityTypeorm } from '../../../entities/demand/DemandEntityTypeorm';

export class FindReportByIdRepositoryTypeorm extends FindReportByIdRepository {
  constructor(
    private readonly reportRepository: Repository<ReportEntity>,
    private readonly demandRepository: Repository<DemandEntityTypeorm>,
  ) {
    super();
  }

  async run(id: string): Promise<ReportEntity> {
    const report = await this.reportRepository.findOne({
      where: { id },
      relations: ['client'],
    });
    let demands: DemandEntityTypeorm[];

    if (report) {
      demands = await this.demandRepository.find({
        relations: ['services'],
        where: {
          report_id: id,
        },
      });

      report.demands = demands;
    }
    return report;
  }
}
