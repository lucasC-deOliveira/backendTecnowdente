import { Module } from '@nestjs/common';
import { CreateDemandModule } from './useCases/createDemand/createDemand.module';
import { ListDemandModule } from './useCases/listDemand/ListDemand.module';

@Module({
  imports: [CreateDemandModule, ListDemandModule],
})
export class DemandModule {}
