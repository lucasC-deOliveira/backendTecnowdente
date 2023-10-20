import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReportEntityTypeorm } from 'src/database/typeorm/entities/report/reportEntityTypeorm';
import { FindReportByIdUseCaseNestjs } from './FindReportByIdUseCaseNestjs';
import { FindReportByIdRepositoryTypeorm } from 'src/database/typeorm/repositories/report/findReportById/FindReportByIdRepositoryTypeorm';
import { FindReportByIdController } from 'src/infra/core/nestjs/presentation/rest/controller/report/findById/find-report-by-di.controller';
import { DemandEntityTypeorm } from 'src/database/typeorm/entities/demand/DemandEntityTypeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([ReportEntityTypeorm, DemandEntityTypeorm]),
  ],
  providers: [FindReportByIdUseCaseNestjs, FindReportByIdRepositoryTypeorm],
  controllers: [FindReportByIdController],
})
export class FindReportByIdModule {}
