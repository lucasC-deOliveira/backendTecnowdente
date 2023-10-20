import { IsUUID } from 'class-validator';

export class FindReportByIdUseCaseClassValidator {
  @IsUUID()
  id: string;
}
