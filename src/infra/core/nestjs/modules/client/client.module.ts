import { Module } from '@nestjs/common';
import { CreateClientModule } from './useCases/createClient/createClient.module';
import { EditClientModule } from './useCases/editClient/editClient.module';
import { FindClientByIdModule } from './useCases/findClientById/FindClientById.module';
import { ListAllClientModule } from './useCases/listAllClient/ListAllClient.module';

@Module({
  providers: [],
  controllers: [],
  imports: [
    CreateClientModule,
    EditClientModule,
    FindClientByIdModule,
    ListAllClientModule,
  ],
})
export class ClientModule {}
