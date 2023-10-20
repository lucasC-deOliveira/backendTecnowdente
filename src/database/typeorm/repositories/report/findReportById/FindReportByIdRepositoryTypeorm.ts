import { Repository } from 'typeorm';
import { FindReportByIdRepository } from '../../../../../domain/modules/reports/repositories/findReportById/FindReportByIdRepository';
import { ReportEntity } from '../../../../../domain/modules/reports/entities/reportEntity';
import { DemandEntityTypeorm } from '../../../entities/demand/DemandEntityTypeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ReportEntityTypeorm } from 'src/database/typeorm/entities/report/reportEntityTypeorm';

@Injectable()
export class FindReportByIdRepositoryTypeorm extends FindReportByIdRepository {
  constructor(
    @InjectRepository(ReportEntityTypeorm)
    private readonly reportRepository: Repository<ReportEntityTypeorm>,
    @InjectRepository(DemandEntityTypeorm)
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
