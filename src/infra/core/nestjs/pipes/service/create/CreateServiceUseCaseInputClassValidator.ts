import { IsNumber, IsString, Min } from 'class-validator';
import { CreateServiceUseCaseInput } from 'src/domain/modules/service/usecases/CreateServiceUseCase/adapters/input/CreateServiceUseCaseInput';

export class CreateServiceUseCaseInputClassValidator extends CreateServiceUseCaseInput {
  @IsString()
  name: string;

  @IsNumber()
  @Min(1)
  amount: number;

  @IsNumber()
  @Min(0)
  cost: number;
}
