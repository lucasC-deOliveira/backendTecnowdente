import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReportEntityTypeorm } from 'src/database/typeorm/entities/report/reportEntityTypeorm';
import { MarkReportAsFinishedByIdUseCaseNestjs } from './MarkReportAsFinishedByIdUseCaseNestjs';
import { MarkReportAsFinishedByIdRepositoryTypeorm } from 'src/database/typeorm/repositories/report/markReportAsFinishedById/MarkReportAsFinishedByIdRepositoryTypeorm';
import { FindReportByIdRepositoryTypeorm } from 'src/database/typeorm/repositories/report/findReportById/FindReportByIdRepositoryTypeorm';
import { MarkAsFinishedController } from 'src/infra/core/nestjs/presentation/rest/controller/report/markAsFinished/mark-as-finished.controller';
import { DemandEntityTypeorm } from 'src/database/typeorm/entities/demand/DemandEntityTypeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([ReportEntityTypeorm, DemandEntityTypeorm]),
  ],
  providers: [
    MarkReportAsFinishedByIdUseCaseNestjs,
    MarkReportAsFinishedByIdRepositoryTypeorm,
    FindReportByIdRepositoryTypeorm,
  ],
  controllers: [MarkAsFinishedController],
})
export class MarkReportAsFinishedByIdModule {}
