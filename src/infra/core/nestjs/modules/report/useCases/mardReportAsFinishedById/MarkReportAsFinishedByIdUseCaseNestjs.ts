import { Injectable } from '@nestjs/common';
import { FindReportByIdRepositoryTypeorm } from 'src/database/typeorm/repositories/report/findReportById/FindReportByIdRepositoryTypeorm';
import { MarkReportAsFinishedByIdRepositoryTypeorm } from 'src/database/typeorm/repositories/report/markReportAsFinishedById/MarkReportAsFinishedByIdRepositoryTypeorm';
import { MarkReportAsFinishedUseCase } from 'src/domain/modules/reports/useCases/markAsFinished/markReportAsFinishedUsecase';

@Injectable()
export class MarkReportAsFinishedByIdUseCaseNestjs extends MarkReportAsFinishedUseCase {
  constructor(
    findReportByIdRepositoryTypeorm: FindReportByIdRepositoryTypeorm,
    markReportAsFinishedByIdRepositoryTypeorm: MarkReportAsFinishedByIdRepositoryTypeorm,
  ) {
    super(
      findReportByIdRepositoryTypeorm,
      markReportAsFinishedByIdRepositoryTypeorm,
    );
  }
}
