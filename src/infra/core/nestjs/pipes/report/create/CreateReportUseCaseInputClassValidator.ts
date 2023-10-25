import {
  IsArray,
  IsDateString,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';
import { CreateReportUseCaseInput } from 'src/domain/modules/reports/repositories/createReport/adapters/input/CreateReportRepositoryInput';

export class CreateReportUseCaseInputClassValidator extends CreateReportUseCaseInput {
  @IsDateString()
  @IsNotEmpty()
  to: Date;

  @IsDateString()
  @IsNotEmpty()
  from: Date;

  @IsString()
  @IsNotEmpty()
  @IsUUID()
  client_id: string;

  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  demads: string[];
}
