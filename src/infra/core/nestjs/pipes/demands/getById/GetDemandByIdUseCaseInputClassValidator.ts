import { IsUUID } from 'class-validator';

export class GetDemandByIdUseCaseClassValidator {
  @IsUUID()
  id: string;
}
