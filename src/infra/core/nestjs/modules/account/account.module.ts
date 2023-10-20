import { Module } from '@nestjs/common';
import { AuthenticateModule } from './useCases/authenticate/Authenticate.module';

@Module({
  imports: [AuthenticateModule],
})
export class AccountModule {}
