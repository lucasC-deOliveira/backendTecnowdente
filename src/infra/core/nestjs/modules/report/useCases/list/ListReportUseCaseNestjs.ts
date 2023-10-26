import { Injectable } from '@nestjs/common';
import { CountReportsRepositoryTypeorm } from 'src/database/typeorm/repositories/report/countReport/CountReportsRepositoryTypeorm';
import { ListReportRepositoryTypeorm } from 'src/database/typeorm/repositories/report/listReport/ListReportRepositoryTypeorm';
import { ListReportUseCase } from 'src/domain/modules/reports/useCases/list/listReportUseCase';

@Injectable()
export class ListReportUseCaseNestjs extends ListReportUseCase {
  constructor(
    listReportRepositoryTypeorm: ListReportRepositoryTypeorm,
    countReportsRepositoryTypeorm: CountReportsRepositoryTypeorm,
  ) {
    super(listReportRepositoryTypeorm, countReportsRepositoryTypeorm);
  }
}
