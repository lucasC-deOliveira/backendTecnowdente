import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthenticateUserUseCaseNesjts } from './AuthenticateUseCaseNestjs';
import { UserTokensEntityTypeorm } from 'src/database/typeorm/entities/account/userTokensEntityTypeorm';
import { UserEntityTypeorm } from 'src/database/typeorm/entities/account/userEntityTypeorm';
import { FindUserByEmailRepositoryTypeorm } from 'src/database/typeorm/repositories/account/findUserByEmail/findUserByEmailRepositoryTypeorm';
import { DeleteTokenByUserIdRepositoryTypeorm } from 'src/database/typeorm/repositories/account/deleteTokenByUserId/DeleteTokenByUserIdRepositoryTypeorm';
import { AddDaysDayjs } from 'src/infra/shared/providers/dateProvider/dayjs/addDaysDayjs';
import { CreateTokenRepositoryTypeorm } from 'src/database/typeorm/repositories/account/createToken/CreateTokenRepositoryTypeorm';
import { AuthenticateController } from 'src/infra/core/nestjs/presentation/rest/controller/account/authenticate/authenticate.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserTokensEntityTypeorm, UserEntityTypeorm]),
  ],
  providers: [
    AuthenticateUserUseCaseNesjts,
    FindUserByEmailRepositoryTypeorm,
    DeleteTokenByUserIdRepositoryTypeorm,
    AddDaysDayjs,
    CreateTokenRepositoryTypeorm,
  ],
  controllers: [AuthenticateController],
})
export class AuthenticateModule {}
