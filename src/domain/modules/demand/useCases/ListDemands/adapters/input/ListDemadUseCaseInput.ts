import { IsDate, IsNumber, IsOptional, IsString } from 'class-validator';

export class ListDemandUseCaseInput {
  page?: number;

  client_id?: string;

  deadline?: Date;

  receivement?: Date;

  patient?: string;

  type?: string;

  states?: string[];

  from?: Date;

  to?: Date;

  is_report_null?: boolean;
}
