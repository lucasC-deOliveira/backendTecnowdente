import { Module } from '@nestjs/common';
import { CreateServiceModule } from './useCases/createService/createService.module';
import { ListAllServicesModule } from './useCases/listAllService/listAllService.module';
import { RemoveServicesByIdModule } from './useCases/removeServiceById/removeServiceById.module';
import { EditServiceModule } from './useCases/editService/EditService.module';

@Module({
  imports: [
    CreateServiceModule,
    ListAllServicesModule,
    RemoveServicesByIdModule,
    EditServiceModule,
  ],
})
export class ServiceModule {}
