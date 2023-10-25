import { Controller, Get, Logger, Param, Query, Res } from '@nestjs/common';
import { BaseController } from 'src/domain/base/baseController/BaseController';
import { Response, query } from 'express';
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
    @Query() query: ListDemandUseCaseInputClassValidator,
    @Res() response: Response,
  ): Promise<Response> {
    const {
      client_id,
      patient,
      deadline,
      receivement,
      type,
      states,
      from,
      to,
      page,
      is_report_null,
    } = query;

    try {
      const demands = await this.listDemandUseCaseNestjs.execute({
        from,
        states,
        to,
        type,
        client_id,
        deadline,
        page,
        patient,
        receivement,
        is_report_null,
      });

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
        error: true,
        status: 500,
        message: 'Erro interno do servidor!',
        data: [],
      });
    }
  }
}
