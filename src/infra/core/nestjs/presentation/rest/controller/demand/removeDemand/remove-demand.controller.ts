import { Controller, Delete, Get, Logger, Param, Res } from '@nestjs/common';
import { BaseController } from 'src/domain/base/baseController/BaseController';
import { Response } from 'express';
import { GetDemandByIdUseCaseClassValidator } from 'src/infra/core/nestjs/pipes/demands/getById/GetDemandByIdUseCaseInputClassValidator';
import { RemoveDemandUseCaseClassValidator } from 'src/infra/core/nestjs/pipes/demands/remove/RemoveDemandUseCaseInputClassValidator';
import { RemoveDemandUseCaseNestjs } from 'src/infra/core/nestjs/modules/demand/useCases/removeDemand/RemoveDemandUseCaseNestjs';

@Controller('/demands')
export class RemoveDemandController extends BaseController {
  constructor(
    private readonly removeDemandUseCaseNestjs: RemoveDemandUseCaseNestjs,
  ) {
    super();
  }
  @Delete('/:id')
  async handle(
    @Param() param: RemoveDemandUseCaseClassValidator,
    @Res() response: Response,
  ): Promise<Response> {
    const { id } = param;
    try {
      await this.removeDemandUseCaseNestjs.execute(id);

      return response.status(200).json({
        error: false,
        status: 200,
        message: 'Demanda removida com sucesso!',
        data: [],
      });
    } catch (e) {
      Logger.error(
        `Error no controlador ${RemoveDemandController.name} error: ${e.message}`,
      );

      if (e.message.includes('Demand not exist')) {
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
