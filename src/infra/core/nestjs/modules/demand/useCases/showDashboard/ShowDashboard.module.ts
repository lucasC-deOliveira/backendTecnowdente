import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DemandEntityTypeorm } from 'src/database/typeorm/entities/demand/DemandEntityTypeorm';
import { FindDemandsBetweenTwoReceivementDateRepositoryTypeorm } from 'src/database/typeorm/repositories/demand/findDemandsBetweenTwoReceivementDate/FindDemandsBetweenTwoReceivementDateRepositoryTypeorm';
import { ShowDashboardController } from 'src/infra/core/nestjs/presentation/rest/controller/demand/showDashboard/show-dashboard.controller';
import { AddMonthDayjs } from 'src/infra/shared/providers/dateProvider/dayjs/addMonthDayjs';
import { startOfMonthDayjs } from 'src/infra/shared/providers/dateProvider/dayjs/startOfMonthDayjs';
import { ShowDashboardUseCaseNestjs } from './ShowDashboardUseCaseNestjs';

@Module({
  imports: [TypeOrmModule.forFeature([DemandEntityTypeorm])],
  providers: [
    startOfMonthDayjs,
    AddMonthDayjs,
    FindDemandsBetweenTwoReceivementDateRepositoryTypeorm,
    ShowDashboardUseCaseNestjs,
  ],
  controllers: [ShowDashboardController],
})
export class ShowDashboardModule {}
