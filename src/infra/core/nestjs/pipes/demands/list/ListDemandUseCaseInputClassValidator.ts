import { Transform } from 'class-transformer';
import {
  IsArray,
  IsBoolean,
  IsDateString,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { ListDemandUseCaseInput } from 'src/domain/modules/demand/useCases/ListDemands/adapters/input/ListDemadUseCaseInput';

export class ListDemandUseCaseInputClassValidator extends ListDemandUseCaseInput {
  @IsNumber()
  @IsOptional()
  page?: number;

  @IsString()
  @IsOptional()
  client_id?: string;

  @IsDateString()
  @IsOptional()
  deadline?: Date;

  @IsDateString()
  @IsOptional()
  receivement?: Date;

  @IsString()
  @IsOptional()
  patient?: string;

  @IsString()
  @IsOptional()
  type?: string;

  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  states?: string[];

  @IsDateString()
  @IsOptional()
  from?: Date;

  @IsDateString()
  @IsOptional()
  to?: Date;

  @Transform(({ obj, key }) => {
    return obj[key] === 'true' ? true : obj[key] === 'false' ? false : obj[key];
  })
  @IsOptional()
  @IsBoolean()
  is_report_null?: boolean;
}
