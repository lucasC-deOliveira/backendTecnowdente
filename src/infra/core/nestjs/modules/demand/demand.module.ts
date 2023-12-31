import { Module } from '@nestjs/common';
import { CreateDemandModule } from './useCases/createDemand/createDemand.module';
import { ListDemandModule } from './useCases/listDemand/ListDemand.module';
import { EditDemandModule } from './useCases/editDemand/EditDemand.module';
import { GetDemandByIdModule } from './useCases/getDemandById/GetDemandById.module';
import { RemoveDemand } from './useCases/removeDemand/RemoveDemand.module';
import { ShowDashboardModule } from './useCases/showDashboard/ShowDashboard.module';

@Module({
  imports: [
    CreateDemandModule,
    ListDemandModule,
    EditDemandModule,
    GetDemandByIdModule,
    RemoveDemand,
    ShowDashboardModule,
  ],
})
export class DemandModule {}
