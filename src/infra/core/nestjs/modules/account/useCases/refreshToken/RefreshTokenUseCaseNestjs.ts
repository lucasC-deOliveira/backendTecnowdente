import { Injectable } from '@nestjs/common';
import { CreateTokenRepositoryTypeorm } from 'src/database/typeorm/repositories/account/createToken/CreateTokenRepositoryTypeorm';
import { DeleteTokenByIdRepositoryTypeorm } from 'src/database/typeorm/repositories/account/deleteTokenById/DeleteTokenByIdRepositoryTypeorm';
import { FindTokenByUserAndRefreshTokenRepositoryTypeorm } from 'src/database/typeorm/repositories/account/findTokenByUserAndRefreshToken/FindTokenByUserAndRefreshTokenRepositoryTypeorm';
import { RefreshTokenUseCase } from 'src/domain/modules/accounts/useCases/refreshToken/refreshTokenUseCase';
import { AddDaysDayjs } from 'src/infra/shared/providers/dateProvider/dayjs/addDaysDayjs';

@Injectable()
export class RefreshTokenUseCaseNestjs extends RefreshTokenUseCase {
  constructor(
    readonly findTokenByUserAndRefreshTokenRepositoryTypeorm: FindTokenByUserAndRefreshTokenRepositoryTypeorm,
    readonly deleteTokenByIdRepositoryTypeorm: DeleteTokenByIdRepositoryTypeorm,
    readonly createTokenRepositoryTypeorm: CreateTokenRepositoryTypeorm,
    readonly addDaysDayjs: AddDaysDayjs,
  ) {
    super(
      findTokenByUserAndRefreshTokenRepositoryTypeorm,
      deleteTokenByIdRepositoryTypeorm,
      createTokenRepositoryTypeorm,
      addDaysDayjs,
    );
  }
}
