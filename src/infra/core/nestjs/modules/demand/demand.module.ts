import { Module } from '@nestjs/common';
import { CreateDemandModule } from './useCases/createDemand/createDemand.module';
import { ListDemandModule } from './useCases/listDemand/ListDemand.module';
import { EditDemandModule } from './useCases/editDemand/EditDemand.module';

@Module({
  imports: [CreateDemandModule, ListDemandModule, EditDemandModule],
})
export class DemandModule {}
