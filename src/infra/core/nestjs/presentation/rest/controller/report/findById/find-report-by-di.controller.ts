import { Param, Controller, Logger, Res, Get } from '@nestjs/common';
import { BaseController } from 'src/domain/base/baseController/BaseController';
import { Response } from 'express';
import { DeleteReportByIdUseCaseNestjs } from 'src/infra/core/nestjs/modules/report/useCases/deleteById/DeleteReportByIdUseCaseNestjs';
import { DeleteReportByIdUseCaseInputClassValidator } from 'src/infra/core/nestjs/pipes/report/deleteReportById/DeleteReportByIdUseCaseInputClassValidator';
import { FindReportByIdUseCaseNestjs } from 'src/infra/core/nestjs/modules/report/useCases/findById/FindReportByIdUseCaseNestjs';
import { FindReportByIdUseCaseClassValidator } from 'src/infra/core/nestjs/pipes/report/findById/FindReportByIdUseCaseClassValidator';

@Controller('/reports')
export class FindReportByIdController extends BaseController {
  constructor(
    private readonly findReportByIdUseCaseNestjs: FindReportByIdUseCaseNestjs,
  ) {
    super();
  }
  @Get('/:id')
  async handle(
    @Param() param: FindReportByIdUseCaseClassValidator,
    @Res() response: Response,
  ): Promise<Response> {
    const { id } = param;

    try {
      const report = await this.findReportByIdUseCaseNestjs.execute(id);

      return response.status(200).json({
        error: false,
        status: 200,
        message: 'Relatório encontrado com sucesso!',
        data: [report],
      });
    } catch (e) {
      Logger.error(
        `Error no controlador ${FindReportByIdController.name} error: ${e.message}`,
      );
      if (e.message.includes('not exists')) {
        return response.status(404).json({
          error: true,
          status: 404,
          message: 'relatório não encontrado!',
          data: [],
        });
      }
      return response.status(500).json({
        error: true,
        status: 500,
        message: 'Erro interno do servidor!',
        data: [],
      });
    }
  }
}
