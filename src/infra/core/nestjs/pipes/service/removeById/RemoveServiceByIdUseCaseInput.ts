import { IsUUID } from 'class-validator';
export class RemoveServiceByIdUseInputClassValidator {
  @IsUUID()
  id: string;
}
