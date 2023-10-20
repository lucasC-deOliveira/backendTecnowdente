import { IsString } from 'class-validator';
import { AuthenticateUserUseCaseInput } from 'src/domain/modules/accounts/useCases/authenticate/adapters/input/AuthenticateUserUseCaseInput';

export class AuthenticateUserUseCaseInputClassValidator extends AuthenticateUserUseCaseInput {
  @IsString()
  email: string;

  @IsString()
  password: string;
}
