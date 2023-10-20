import { Controller, Delete, Get, Logger, Param, Res } from '@nestjs/common';
import { BaseController } from 'src/domain/base/baseController/BaseController';
import { Response } from 'express';
import { RemoveServiceByIdUseCaseNestjs } from 'src/infra/core/nestjs/modules/service/useCases/removeServiceById/RemoveServiceByIdUseCaseNestjs';
import { RemoveServiceByIdUseInputClassValidator } from 'src/infra/core/nestjs/pipes/service/removeById/RemoveServiceByIdUseCaseInput';

@Controller('/services')
export class RemoveServiceByIdController extends BaseController {
  constructor(
    private readonly removeServiceByIdUseCaseNestjs: RemoveServiceByIdUseCaseNestjs,
  ) {
    super();
  }
  @Delete('/:id')
  async handle(
    @Res() response: Response,
    @Param() params: RemoveServiceByIdUseInputClassValidator,
  ): Promise<Response> {
    try {
      const { id } = params;
      await this.removeServiceByIdUseCaseNestjs.execute(id);

      return response.status(200).json({
        error: false,
        status: 200,
        message: 'Serviço removido com sucesso!',
        data: [],
      });
    } catch (e) {
      Logger.error(
        `Error no controlador ${RemoveServiceByIdController.name} error: ${e}`,
      );

      if (e.message.includes('service does not exist')) {
        return response.status(500).json({
          error: false,
          status: 500,
          message: 'Erro ao remover o serviço: Serviço não encontrado!',
          data: [],
        });
      }

      return response.status(500).json({
        error: false,
        status: 500,
        message: 'Erro interno do servidor!',
        data: [],
      });
    }
  }
}
