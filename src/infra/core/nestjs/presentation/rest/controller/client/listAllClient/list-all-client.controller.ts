import { Controller, Get, Logger, Param, Query, Res } from '@nestjs/common';
import { Response } from 'express';
import { BaseController } from 'src/domain/base/baseController/BaseController';
import { ListAllClientUseCaseNestjs } from 'src/infra/core/nestjs/modules/client/useCases/listAllClient/ListAllClientUseCaseNestjs';
import { ListAllClientsUseCaseInpuClassValidator } from 'src/infra/core/nestjs/pipes/client/listAll/ListAllClientsUseCaseInputClassValidator';

@Controller('/clients')
export class ListAllClientController extends BaseController {
  constructor(private listAllClientUseCaseNestjs: ListAllClientUseCaseNestjs) {
    super();
  }
  @Get('/')
  async handle(
    @Res() response: Response,
    @Query() query: ListAllClientsUseCaseInpuClassValidator,
  ): Promise<Response> {
    try {
      const { page } = query;

      const clients = await this.listAllClientUseCaseNestjs.execute(page);

      return response.status(201).json({
        error: false,
        status: 200,
        message: 'Clientes listados com sucesso!',
        data: clients,
      });
    } catch (e) {
      Logger.error(
        `Error no controlador: ${ListAllClientController.name}, Error: ${e.message}`,
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
