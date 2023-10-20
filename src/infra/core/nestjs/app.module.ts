import { MiddlewareConsumer, Module } from '@nestjs/common';
import configuration from './config/configuration';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from 'src/database/typeorm/typeorm.module';
import { DemandModule } from './modules/demand/demand.module';
import { ServiceModule } from './modules/service/service.module';
import { AccountModule } from './modules/account/account.module';
import { AuthMiddleware } from 'src/infra/middleware/EnsureAuthenticated';
import { ClientModule } from './modules/client/client.module';
import { ReportModule } from './modules/report/report.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
    }),
    TypeOrmModule,
    DemandModule,
    ServiceModule,
    AccountModule,
    ClientModule,
    ReportModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .forRoutes('/demands', '/services', '/clients', 'reports');
  }
}
