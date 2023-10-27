import { IsOptional, IsString, IsUUID } from 'class-validator';
import { EditClientInput } from 'src/domain/modules/clients/useCases/editClient/adapters/input/EditClientInput';

export class EditClientUseCaseInputClassValidator extends EditClientInput {
  @IsUUID()
  id: string;

  @IsString()
  name: string;

  @IsString()
  @IsOptional()
  cnpj: string;
}
