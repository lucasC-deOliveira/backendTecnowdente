import { IsOptional } from 'class-validator';

export class ListAllClientsUseCaseInpuClassValidator {
  @IsOptional()
  page?: number;
}
