import { MiddlewareConsumer, Module } from '@nestjs/common';
import { CreateDemandModule } from './useCases/createDemand/createDemand.module';

@Module({
  imports: [CreateDemandModule],
})
export class DemandModule {}
