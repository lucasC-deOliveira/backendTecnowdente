import { Repository } from 'typeorm';
import { ListReportRepository } from '../../../../../domain/modules/reports/repositories/listReport/ListReportRepository';
import { ReportEntityTypeorm } from '../../../entities/report/reportEntityTypeorm';
import { ReportEntity } from '../../../../../domain/modules/reports/entities/reportEntity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ListReportRepositoryTypeorm extends ListReportRepository {
  constructor(
    @InjectRepository(ReportEntityTypeorm)
    private readonly reportRepository: Repository<ReportEntityTypeorm>,
  ) {
    super();
  }
  async run(): Promise<ReportEntity[]> {
    return await this.reportRepository.find({ relations: ['client'] });
  }
}
