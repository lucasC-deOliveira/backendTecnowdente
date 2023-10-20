import { Injectable } from '@nestjs/common';
import { CreateTokenRepositoryTypeorm } from 'src/database/typeorm/repositories/account/createToken/CreateTokenRepositoryTypeorm';
import { DeleteTokenByUserIdRepositoryTypeorm } from 'src/database/typeorm/repositories/account/deleteTokenByUserId/DeleteTokenByUserIdRepositoryTypeorm';
import { FindUserByEmailRepositoryTypeorm } from 'src/database/typeorm/repositories/account/findUserByEmail/findUserByEmailRepositoryTypeorm';
import { AuthenticateUserUseCase } from 'src/domain/modules/accounts/useCases/authenticate/authenticateUserUseCase';
import { AddDaysDayjs } from 'src/infra/shared/providers/dateProvider/dayjs/addDaysDayjs';
@Injectable()
export class AuthenticateUserUseCaseNesjts extends AuthenticateUserUseCase {
  constructor(
    readonly findUserByEmailRepositoryTypeorm: FindUserByEmailRepositoryTypeorm,

    readonly deleteTokenByUserIdRepositoryTypeorm: DeleteTokenByUserIdRepositoryTypeorm,

    readonly addDaysDayjs: AddDaysDayjs,

    readonly createTokenRepositoryTypeorm: CreateTokenRepositoryTypeorm,
  ) {
    super(
      findUserByEmailRepositoryTypeorm,
      deleteTokenByUserIdRepositoryTypeorm,
      addDaysDayjs,
      createTokenRepositoryTypeorm,
    );
  }
}
