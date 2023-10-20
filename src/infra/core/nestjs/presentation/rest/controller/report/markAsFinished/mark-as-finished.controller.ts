import { Controller, Logger, Res, Param, Patch } from '@nestjs/common';
import { BaseController } from 'src/domain/base/baseController/BaseController';
import { Response } from 'express';
import { MarkReportAsFinishedByIdUseCaseNestjs } from 'src/infra/core/nestjs/modules/report/useCases/mardReportAsFinishedById/MarkReportAsFinishedByIdUseCaseNestjs';
import { MarkReportAsFinishedByIdUseCaseClassValidator } from 'src/infra/core/nestjs/pipes/report/MarkReportAsFinishedById/MarkReportAsFinishedByIdUseCaseInputClassValidator';

@Controller('/reports/finish')
export class MarkAsFinishedController extends BaseController {
  constructor(
    private readonly markReportAsFinishedByIdUseCaseNestjs: MarkReportAsFinishedByIdUseCaseNestjs,
  ) {
    super();
  }
  @Patch('/:id')
  async handle(
    @Res() response: Response,
    @Param() param: MarkReportAsFinishedByIdUseCaseClassValidator,
  ): Promise<Response> {
    try {
      const { id } = param;

      await this.markReportAsFinishedByIdUseCaseNestjs.execute(id);

      return response.status(200).json({
        error: false,
        status: 200,
        message: 'Relatório marcado como finalizado com sucesso!',
        data: [],
      });
    } catch (e) {
      Logger.error(
        `Error no controlador ${MarkAsFinishedController.name} error: ${e.message}`,
      );
      if (e.message.includes('not found')) {
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
