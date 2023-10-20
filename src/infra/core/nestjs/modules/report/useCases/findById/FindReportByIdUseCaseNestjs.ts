import { Injectable } from '@nestjs/common';
import { FindReportByIdRepositoryTypeorm } from 'src/database/typeorm/repositories/report/findReportById/FindReportByIdRepositoryTypeorm';
import { ListReportByIdUseCase } from 'src/domain/modules/reports/useCases/listById/listByIdUseCase';

@Injectable()
export class FindReportByIdUseCaseNestjs extends ListReportByIdUseCase {
  constructor(
    findReportByIdRepositoryTypeorm: FindReportByIdRepositoryTypeorm,
  ) {
    super(findReportByIdRepositoryTypeorm);
  }
}
