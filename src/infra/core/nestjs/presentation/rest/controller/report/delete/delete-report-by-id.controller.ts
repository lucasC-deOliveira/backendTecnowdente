import { Param, Controller, Logger, Post, Res, Delete } from '@nestjs/common';
import { BaseController } from 'src/domain/base/baseController/BaseController';
import { Response } from 'express';
import { DeleteReportByIdUseCaseNestjs } from 'src/infra/core/nestjs/modules/report/useCases/deleteById/DeleteReportByIdUseCaseNestjs';
import { DeleteReportByIdUseCaseInputClassValidator } from 'src/infra/core/nestjs/pipes/report/deleteReportById/DeleteReportByIdUseCaseInputClassValidator';

@Controller('/reports')
export class DeleteReportByIdController extends BaseController {
  constructor(
    private readonly deleteReportByIdUseCaseNestjs: DeleteReportByIdUseCaseNestjs,
  ) {
    super();
  }
  @Delete('/:id')
  async handle(
    @Param() param: DeleteReportByIdUseCaseInputClassValidator,
    @Res() response: Response,
  ): Promise<Response> {
    const { id } = param;

    try {
      await this.deleteReportByIdUseCaseNestjs.execute(id);

      return response.status(200).json({
        error: false,
        status: 200,
        message: 'Relatório deletado com sucesso!',
        data: [],
      });
    } catch (e) {
      Logger.error(
        `Error no controlador ${DeleteReportByIdController.name} error: ${e.message}`,
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
