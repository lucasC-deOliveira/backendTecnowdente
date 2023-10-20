import { Body, Controller, Logger, Post, Res } from '@nestjs/common';
import { BaseController } from 'src/domain/base/baseController/BaseController';
import { CreateDemandInputClassValidator } from 'src/infra/core/nestjs/pipes/demands/create/CreateDemandInputClassValidator';
import { Response } from 'express';
import { CreateDemandUseCaseNestjs } from 'src/infra/core/nestjs/modules/demand/useCases/createDemand/CreateDemandUseCaseNestjs';

@Controller('/demands')
export class CreateDemandController extends BaseController {
  constructor(
    private readonly createDemandUsecaseNestjs: CreateDemandUseCaseNestjs,
  ) {
    super();
  }
  @Post('/')
  async handle(
    @Body() data: CreateDemandInputClassValidator,
    @Res() response: Response,
  ): Promise<Response> {
    const {
      client_id,
      patient,
      type,
      deadline,
      services,
      state,
      observations,
    } = data;

    try {
      await this.createDemandUsecaseNestjs.execute({
        client_id,
        patient,
        type,
        deadline,
        services,
        state,
        observations,
      });

      return response.status(200).json({
        error: false,
        status: 200,
        message: 'Demanda cadastrada com sucesso!',
        data: [],
      });
    } catch (e) {
      Logger.error(
        `Error no controlador ${CreateDemandController.name} error: ${e}`,
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
