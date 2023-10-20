import { Module } from '@nestjs/common';
import { AuthenticateModule } from './useCases/authenticate/Authenticate.module';
import { RefreshTokenModule } from './useCases/refreshToken/RefreshToken.module';

@Module({
  imports: [AuthenticateModule, RefreshTokenModule],
})
export class AccountModule {}
