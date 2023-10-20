import { IsNumber, IsOptional } from 'class-validator';

export class ListDemandUseCaseInputClassValidator {
  @IsNumber()
  @IsOptional()
  page?: number;
}
