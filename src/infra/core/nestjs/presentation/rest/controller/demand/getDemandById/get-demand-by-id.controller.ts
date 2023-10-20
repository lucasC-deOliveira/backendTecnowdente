import { Controller, Get, Logger, Param, Res } from '@nestjs/common';
import { BaseController } from 'src/domain/base/baseController/BaseController';
import { Response } from 'express';
import { GetDemandByIdUseCaseClassValidator } from 'src/infra/core/nestjs/pipes/demands/getById/GetDemandByIdUseCaseInputClassValidator';
import { GetDemandByIdUseCaseNestjs } from 'src/infra/core/nestjs/modules/demand/useCases/getDemandById/GetDemandByIdUseCaseNestjs';

@Controller('/demands')
export class GetDemandByIdController extends BaseController {
  constructor(
    private readonly getDemandByIdUseCaseNestjs: GetDemandByIdUseCaseNestjs,
  ) {
    super();
  }
  @Get('/:id')
  async handle(
    @Param() param: GetDemandByIdUseCaseClassValidator,
    @Res() response: Response,
  ): Promise<Response> {
    const { id } = param;
    try {
      const demand = await this.getDemandByIdUseCaseNestjs.execute(id);

      return response.status(200).json({
        error: false,
        status: 200,
        message: 'Demanda encontrada sucesso!',
        data: [demand],
      });
    } catch (e) {
      Logger.error(
        `Error no controlador ${GetDemandByIdController.name} error: ${e.message}`,
      );

      if (e.message.includes('demand not exist')) {
        return response.status(404).json({
          error: true,
          message: 'Demanda não encontrada!',
          data: [],
          status: 404,
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
