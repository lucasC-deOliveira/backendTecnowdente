import { Body, Controller, Logger, Post, Res } from '@nestjs/common';
import { BaseController } from 'src/domain/base/baseController/BaseController';
import { Response } from 'express';
import { CreateServiceUseCaseNestjs } from 'src/infra/core/nestjs/modules/service/useCases/createService/createServiceUseCaseNestjs';
import { CreateServiceUseCaseInputClassValidator } from 'src/infra/core/nestjs/pipes/service/create/CreateServiceUseCaseInputClassValidator';

@Controller('/services')
export class CreateServiceController extends BaseController {
  constructor(
    private readonly createServiceUsecaseNestjs: CreateServiceUseCaseNestjs,
  ) {
    super();
  }
  @Post('/')
  async handle(
    @Body() data: CreateServiceUseCaseInputClassValidator,
    @Res() response: Response,
  ): Promise<Response> {
    const { amount, cost, name } = data;

    try {
      await this.createServiceUsecaseNestjs.execute({
        amount,
        cost,
        name,
      });

      return response.status(200).json({
        error: false,
        status: 200,
        message: 'Serviço cadastrado com sucesso!',
        data: [],
      });
    } catch (e) {
      Logger.error(
        `Error no controlador ${CreateServiceController.name} error: ${e}`,
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
