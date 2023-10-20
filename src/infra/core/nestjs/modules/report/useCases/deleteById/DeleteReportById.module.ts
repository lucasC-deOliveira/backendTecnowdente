import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DemandEntityTypeorm } from 'src/database/typeorm/entities/demand/DemandEntityTypeorm';
import { ReportEntityTypeorm } from 'src/database/typeorm/entities/report/reportEntityTypeorm';
import { DeleteReportByIdRepositoryTypeorm } from 'src/database/typeorm/repositories/report/deleteReportById/DeleteReportbByIdRepositoryTypeorm';
import { FindReportByIdRepositoryTypeorm } from 'src/database/typeorm/repositories/report/findReportById/FindReportByIdRepositoryTypeorm';
import { DeleteReportByIdUseCaseNestjs } from './DeleteReportByIdUseCaseNestjs';
import { DeleteReportByIdController } from 'src/infra/core/nestjs/presentation/rest/controller/report/delete/delete-report-by-id.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([ReportEntityTypeorm, DemandEntityTypeorm]),
  ],
  providers: [
    DeleteReportByIdRepositoryTypeorm,
    FindReportByIdRepositoryTypeorm,
    DeleteReportByIdUseCaseNestjs,
  ],
  controllers: [DeleteReportByIdController],
})
export class DeleteReportByIdModule {}
