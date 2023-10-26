import { ReportEntity } from 'src/domain/modules/reports/entities/reportEntity';

export class ListReportsUseCaseOutput {
  reports: ReportEntity[];
  reportsCount: number;
}
