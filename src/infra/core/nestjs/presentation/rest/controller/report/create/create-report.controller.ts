import { Body, Controller, Logger, Post, Res } from '@nestjs/common';
import { BaseController } from 'src/domain/base/baseController/BaseController';
import { Response } from 'express';
import { CreateReportUseCaseInputClassValidator } from 'src/infra/core/nestjs/pipes/report/create/CreateReportUseCaseInputClassValidator';
import { CreateReportUseCaseNestjs } from 'src/infra/core/nestjs/modules/report/useCases/create/CreateReportUseCaseNestjs';

@Controller('/reports')
export class CreateReportController extends BaseController {
  constructor(
    private readonly createReportUseCaseNestjs: CreateReportUseCaseNestjs,
  ) {
    super();
  }
  @Post('/')
  async handle(
    @Body() data: CreateReportUseCaseInputClassValidator,
    @Res() response: Response,
  ): Promise<Response> {
    const { client_id, from, to } = data;

    try {
      await this.createReportUseCaseNestjs.execute({
        client_id,
        from,
        to,
      });

      return response.status(200).json({
        error: false,
        status: 200,
        message: 'Relatório cadastrado com sucesso!',
        data: [],
      });
    } catch (e) {
      Logger.error(
        `Error no controlador ${CreateReportController.name} error: ${e}`,
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
