import { Controller, Get, Logger, Query, Res } from '@nestjs/common';
import { BaseController } from 'src/domain/base/baseController/BaseController';
import { Response } from 'express';
import { ListServiceAllUseCaseNestjs } from 'src/infra/core/nestjs/modules/service/useCases/listAllService/listAllServicesUseCaseNestjs';
import { ListServiceAllUseCaseInputClassValidator } from 'src/infra/core/nestjs/pipes/service/listAll/ListServiceAllUseCaseInputClassValidator';

@Controller('/services')
export class ListAllServicesController extends BaseController {
  constructor(
    private readonly listServiceAllUseCaseNestjs: ListServiceAllUseCaseNestjs,
  ) {
    super();
  }
  @Get('/')
  async handle(
    @Res() response: Response,
    @Query() query: ListServiceAllUseCaseInputClassValidator,
  ): Promise<Response> {
    try {
      const { page } = query;

      const services = await this.listServiceAllUseCaseNestjs.execute(page);

      return response.status(200).json({
        error: false,
        status: 200,
        message: 'Serviços listados com sucesso!',
        data: services,
      });
    } catch (e) {
      Logger.error(
        `Error no controlador ${ListAllServicesController.name} error: ${e}`,
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
