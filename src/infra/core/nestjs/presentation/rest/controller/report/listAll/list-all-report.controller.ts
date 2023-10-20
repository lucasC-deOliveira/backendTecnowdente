import { Controller, Logger, Res, Get } from '@nestjs/common';
import { BaseController } from 'src/domain/base/baseController/BaseController';
import { Response } from 'express';
import { ListReportUseCaseNestjs } from 'src/infra/core/nestjs/modules/report/useCases/list/ListReportUseCaseNestjs';

@Controller('/reports')
export class ListAllReportController extends BaseController {
  constructor(
    private readonly listReportUseCaseNestjs: ListReportUseCaseNestjs,
  ) {
    super();
  }
  @Get('/')
  async handle(@Res() response: Response): Promise<Response> {
    try {
      const reports = await this.listReportUseCaseNestjs.execute();

      return response.status(200).json({
        error: false,
        status: 200,
        message: 'Relatório listados com sucesso!',
        data: reports,
      });
    } catch (e) {
      Logger.error(
        `Error no controlador ${ListAllReportController.name} error: ${e.message}`,
      );
      return response.status(500).json({
        error: false,
        status: 500,
        message: 'Erro interno do servidor!',
        data: [],
      });
    }
  }
}
