import { IsNumber, IsOptional } from 'class-validator';

export class ListServiceAllUseCaseInputClassValidator {
  @IsOptional()
  page?: number;
}
