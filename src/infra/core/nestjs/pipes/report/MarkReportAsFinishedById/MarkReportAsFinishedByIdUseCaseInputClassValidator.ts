import { IsUUID } from 'class-validator';

export class MarkReportAsFinishedByIdUseCaseClassValidator {
  @IsUUID()
  id: string;
}
