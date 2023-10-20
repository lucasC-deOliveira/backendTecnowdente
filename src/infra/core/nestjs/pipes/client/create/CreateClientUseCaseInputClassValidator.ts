import { IsString } from 'class-validator';
import { CreateClientUseCaseInput } from 'src/domain/modules/clients/useCases/createClient/adapters/input/CreateClientUseCaseInput';

export class CreateClientUseCaseInputClassValidator extends CreateClientUseCaseInput {
  @IsString()
  cnpj: string;
  @IsString()
  name: string;
}
