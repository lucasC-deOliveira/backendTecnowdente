import { Module } from '@nestjs/common';
import { DeleteReportByIdModule } from './useCases/deleteById/DeleteReportById.module';
import { CreateReportModule } from './useCases/create/CreateReport.module';
import { FindReportByIdModule } from './useCases/findById/FindReportById.module';
import { ListReportModule } from './useCases/list/ListReport.module';
import { MarkReportAsFinishedByIdModule } from './useCases/mardReportAsFinishedById/markReportAsFinishedById.module';

@Module({
  imports: [
    DeleteReportByIdModule,
    CreateReportModule,
    FindReportByIdModule,
    ListReportModule,
    MarkReportAsFinishedByIdModule,
  ],
  providers: [],
  controllers: [],
})
export class ReportModule {}
