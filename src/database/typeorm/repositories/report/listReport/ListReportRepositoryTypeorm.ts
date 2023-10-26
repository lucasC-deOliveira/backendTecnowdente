import { FindManyOptions, Repository } from 'typeorm';
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
  async run(page?: number): Promise<ReportEntity[]> {
    const limit = 5;

    const offset = limit * page - limit;

    const findOptions: FindManyOptions = { relations: ['client'] };

    if (page) {
      findOptions.skip = offset > 1 ? offset : 0;
      findOptions.take = limit;
    }
    return await this.reportRepository.find(findOptions);
  }
}
