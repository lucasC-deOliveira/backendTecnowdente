import { Module } from '@nestjs/common';
import { CreateClientModule } from './useCases/createClient/createClient.module';
import { EditClientModule } from './useCases/editClient/editClient.module';
import { FindClientByIdModule } from './useCases/findClientById/FindClientById.module';
import { ListAllClientModule } from './useCases/listAllClient/ListAllClient.module';
import { RemoveClientModule } from './useCases/removeClient/RemoveClient.module';

@Module({
  providers: [],
  controllers: [],
  imports: [
    CreateClientModule,
    EditClientModule,
    FindClientByIdModule,
    ListAllClientModule,
    RemoveClientModule,
  ],
})
export class ClientModule {}
