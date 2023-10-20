import { Controller, Get, Logger, Param, Res } from '@nestjs/common';
import { BaseController } from 'src/domain/base/baseController/BaseController';
import { Response } from 'express';
import { ListDemandUseCaseInputClassValidator } from 'src/infra/core/nestjs/pipes/demands/list/ListDemandUseCaseInputClassValidator';
import { ListDemandUseCaseNestjs } from 'src/infra/core/nestjs/modules/demand/useCases/listDemand/ListDemandUseCaseNestjs';

@Controller('/demands')
export class ListDemandController extends BaseController {
  constructor(
    private readonly listDemandUseCaseNestjs: ListDemandUseCaseNestjs,
  ) {
    super();
  }
  @Get('/')
  async handle(
    @Param() param: ListDemandUseCaseInputClassValidator,
    @Res() response: Response,
  ): Promise<Response> {
    const { page } = param;

    try {
      const demands = await this.listDemandUseCaseNestjs.execute(page);

      return response.status(200).json({
        error: false,
        status: 200,
        message: 'Demandas listadas sucesso!',
        data: demands,
      });
    } catch (e) {
      Logger.error(
        `Error no controlador ${ListDemandController.name} error: ${e}`,
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
