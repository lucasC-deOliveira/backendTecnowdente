import { IsUUID } from 'class-validator';
export class FindServiceByIdUseInputClassValidator {
  @IsUUID()
  id: string;
}
