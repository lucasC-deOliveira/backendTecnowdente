import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReportEntityTypeorm } from 'src/database/typeorm/entities/report/reportEntityTypeorm';
import { CreateReportUseCaseNestjs } from './CreateReportUseCaseNestjs';
import { CreateReportRepositoryTypeorm } from 'src/database/typeorm/repositories/report/createReport/CreateReportRepositoryTypeorm';
import { CreateReportController } from 'src/infra/core/nestjs/presentation/rest/controller/report/create/create-report.controller';
import { DemandEntityTypeorm } from 'src/database/typeorm/entities/demand/DemandEntityTypeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([ReportEntityTypeorm, DemandEntityTypeorm]),
  ],
  providers: [CreateReportUseCaseNestjs, CreateReportRepositoryTypeorm],
  controllers: [CreateReportController],
})
export class CreateReportModule {}
