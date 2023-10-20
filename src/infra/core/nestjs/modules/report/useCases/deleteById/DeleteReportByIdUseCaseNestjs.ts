import { Injectable } from '@nestjs/common';
import { DeleteReportByIdRepositoryTypeorm } from 'src/database/typeorm/repositories/report/deleteReportById/DeleteReportbByIdRepositoryTypeorm';
import { FindReportByIdRepositoryTypeorm } from 'src/database/typeorm/repositories/report/findReportById/FindReportByIdRepositoryTypeorm';
import { DeleteReportUseCase } from 'src/domain/modules/reports/useCases/delete/deleteReportUsecase';

@Injectable()
export class DeleteReportByIdUseCaseNestjs extends DeleteReportUseCase {
  constructor(
    findReportByIdRepositoryTypeorm: FindReportByIdRepositoryTypeorm,
    deleteReportByIdRepositoryTypeorm: DeleteReportByIdRepositoryTypeorm,
  ) {
    super(findReportByIdRepositoryTypeorm, deleteReportByIdRepositoryTypeorm);
  }
}
