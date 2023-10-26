import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ReportEntityTypeorm } from 'src/database/typeorm/entities/report/reportEntityTypeorm';
import { CountReportsRepository } from 'src/domain/modules/reports/repositories/countReports/CountReportsRepository';
import { Repository } from 'typeorm';

@Injectable()
export class CountReportsRepositoryTypeorm extends CountReportsRepository {
  constructor(
    @InjectRepository(ReportEntityTypeorm)
    private reportRepository: Repository<ReportEntityTypeorm>,
  ) {
    super();
  }
  async run(): Promise<number> {
    return this.reportRepository.count();
  }
}
