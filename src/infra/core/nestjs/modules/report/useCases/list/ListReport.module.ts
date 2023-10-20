import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DemandEntityTypeorm } from 'src/database/typeorm/entities/demand/DemandEntityTypeorm';
import { ReportEntityTypeorm } from 'src/database/typeorm/entities/report/reportEntityTypeorm';
import { ListReportUseCaseNestjs } from './ListReportUseCaseNestjs';
import { ListReportRepositoryTypeorm } from 'src/database/typeorm/repositories/report/listReport/ListReportRepositoryTypeorm';
import { ListAllReportController } from 'src/infra/core/nestjs/presentation/rest/controller/report/listAll/list-all-report.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([ReportEntityTypeorm, DemandEntityTypeorm]),
  ],
  providers: [ListReportUseCaseNestjs, ListReportRepositoryTypeorm],
  controllers: [ListAllReportController],
})
export class ListReportModule {}
