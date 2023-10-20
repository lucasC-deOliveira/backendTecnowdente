import { IsString } from 'class-validator';

export class RefreshTokenUseCaseClassValidator {
  @IsString()
  token: string;
}
