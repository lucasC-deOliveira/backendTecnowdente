import { IsUUID } from 'class-validator';

export class RemoveClientUseCaseInputClassValidator {
  @IsUUID()
  id: string;
}
