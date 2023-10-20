import { Module } from '@nestjs/common';
import { CreateClientModule } from './useCases/createClient/createClient.module';

@Module({
  providers: [],
  controllers: [],
  imports: [CreateClientModule],
})
export class ClientModule {}
