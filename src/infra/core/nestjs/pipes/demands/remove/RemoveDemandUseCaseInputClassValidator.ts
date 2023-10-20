import { IsUUID } from 'class-validator';

export class RemoveDemandUseCaseClassValidator {
  @IsUUID()
  id: string;
}
