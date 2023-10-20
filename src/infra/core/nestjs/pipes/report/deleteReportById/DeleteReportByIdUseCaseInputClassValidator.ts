import { IsUUID } from 'class-validator';

export class DeleteReportByIdUseCaseInputClassValidator {
  @IsUUID()
  id: string;
}
