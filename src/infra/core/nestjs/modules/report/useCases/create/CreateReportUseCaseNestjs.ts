import { Injectable } from '@nestjs/common';
import { CreateReportRepositoryTypeorm } from 'src/database/typeorm/repositories/report/createReport/CreateReportRepositoryTypeorm';
import { CreateReportUseCase } from 'src/domain/modules/reports/useCases/create/createReportUseCase';

@Injectable()
export class CreateReportUseCaseNestjs extends CreateReportUseCase {
  constructor(createReportRepositoryTypeorm: CreateReportRepositoryTypeorm) {
    super(createReportRepositoryTypeorm);
  }
}
