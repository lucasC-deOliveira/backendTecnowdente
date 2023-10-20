import { Controller, Get, Logger, Param, Res } from '@nestjs/common';
import { BaseController } from 'src/domain/base/baseController/BaseController';
import { Response } from 'express';
import { ShowDashboardUseCaseNestjs } from 'src/infra/core/nestjs/modules/demand/useCases/showDashboard/ShowDashboardUseCaseNestjs';

@Controller('/demands/dashboard/show')
export class ShowDashboardController extends BaseController {
  constructor(
    private readonly showDashboardUseCaseNestjs: ShowDashboardUseCaseNestjs,
  ) {
    super();
  }
  @Get('/')
  async handle(@Res() response: Response): Promise<Response> {
    try {
      const dashboard = await this.showDashboardUseCaseNestjs.execute();

      return response.status(200).json({
        error: false,
        status: 200,
        message: 'Dashboard exibido sucesso!',
        data: [dashboard],
      });
    } catch (e) {
      Logger.error(
        `Error no controlador ${ShowDashboardController.name} error: ${e.message}`,
      );

      return response.status(500).json({
        error: true,
        status: 500,
        message: 'Erro interno do servidor!',
        data: [],
      });
    }
  }
}
