import { IsNumber, IsString, IsUUID } from 'class-validator';
import { EditServiceByIdUseCaseInput } from 'src/domain/modules/service/usecases/editServiceByIdUseCase/adapters/input/EditServiceByIdUserCaseInput';

export class EditServiceUseCaseInputClassValidator extends EditServiceByIdUseCaseInput {
  @IsUUID()
  id: string;

  @IsString()
  name: string;

  @IsNumber()
  amount: number;

  @IsNumber()
  cost: number;
}
