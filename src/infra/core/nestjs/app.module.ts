import { Module } from '@nestjs/common';
import configuration from './config/configuration';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from 'src/database/typeorm/typeorm.module';
import { DemandModule } from './modules/demand/demand.module';
import { ServiceModule } from './modules/service/service.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
    }),
    TypeOrmModule,
    DemandModule,
    ServiceModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
