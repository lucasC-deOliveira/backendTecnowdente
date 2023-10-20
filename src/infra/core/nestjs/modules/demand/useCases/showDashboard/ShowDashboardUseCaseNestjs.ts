import { Injectable } from '@nestjs/common';
import { FindDemandsBetweenTwoReceivementDateRepositoryTypeorm } from 'src/database/typeorm/repositories/demand/findDemandsBetweenTwoReceivementDate/FindDemandsBetweenTwoReceivementDateRepositoryTypeorm';
import { ShowDashboardUseCase } from 'src/domain/modules/demand/useCases/showDashBoard/showDashboarUsecase';
import { AddMonthDayjs } from 'src/infra/shared/providers/dateProvider/dayjs/addMonthDayjs';
import { startOfMonthDayjs } from 'src/infra/shared/providers/dateProvider/dayjs/startOfMonthDayjs';

@Injectable()
export class ShowDashboardUseCaseNestjs extends ShowDashboardUseCase {
  constructor(
    startOfMonthDayjs: startOfMonthDayjs,
    addMonthDayjs: AddMonthDayjs,
    findDemandsBetweenTwoReceivementDateRepositoryTypeorm: FindDemandsBetweenTwoReceivementDateRepositoryTypeorm,
  ) {
    super(
      startOfMonthDayjs,
      addMonthDayjs,
      findDemandsBetweenTwoReceivementDateRepositoryTypeorm,
    );
  }
}
