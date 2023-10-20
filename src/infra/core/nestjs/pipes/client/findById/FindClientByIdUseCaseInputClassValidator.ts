import { IsUUID } from 'class-validator';

export class FindClientByIdUseCaseClassValidator {
  @IsUUID()
  id: string;
}
