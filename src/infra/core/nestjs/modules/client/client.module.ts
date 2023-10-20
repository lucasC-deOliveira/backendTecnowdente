import { Module } from '@nestjs/common';
import { CreateClientModule } from './useCases/createClient/createClient.module';
import { EditClientModule } from './useCases/editClient/editClient.module';

@Module({
  providers: [],
  controllers: [],
  imports: [CreateClientModule, EditClientModule],
})
export class ClientModule {}
