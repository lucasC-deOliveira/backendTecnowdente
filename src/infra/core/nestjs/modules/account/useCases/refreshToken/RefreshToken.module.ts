import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserTokensEntityTypeorm } from 'src/database/typeorm/entities/account/userTokensEntityTypeorm';
import { UserEntityTypeorm } from 'src/database/typeorm/entities/account/userEntityTypeorm';
import { AddDaysDayjs } from 'src/infra/shared/providers/dateProvider/dayjs/addDaysDayjs';
import { FindTokenByUserAndRefreshTokenRepositoryTypeorm } from 'src/database/typeorm/repositories/account/findTokenByUserAndRefreshToken/FindTokenByUserAndRefreshTokenRepositoryTypeorm';
import { DeleteTokenByIdRepositoryTypeorm } from 'src/database/typeorm/repositories/account/deleteTokenById/DeleteTokenByIdRepositoryTypeorm';
import { CreateTokenRepositoryTypeorm } from 'src/database/typeorm/repositories/account/createToken/CreateTokenRepositoryTypeorm';
import { RefreshTokenController } from 'src/infra/core/nestjs/presentation/rest/controller/account/refreshToken/refresh-token.controller';
import { RefreshTokenUseCaseNestjs } from './RefreshTokenUseCaseNestjs';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserTokensEntityTypeorm, UserEntityTypeorm]),
  ],
  providers: [
    FindTokenByUserAndRefreshTokenRepositoryTypeorm,
    DeleteTokenByIdRepositoryTypeorm,
    CreateTokenRepositoryTypeorm,
    AddDaysDayjs,
    RefreshTokenUseCaseNestjs,
  ],
  controllers: [RefreshTokenController],
})
export class RefreshTokenModule {}
