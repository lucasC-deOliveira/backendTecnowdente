import { Controller, Delete, Get, Logger, Param, Res } from '@nestjs/common';
import { BaseController } from 'src/domain/base/baseController/BaseController';
import { Response } from 'express';
import { RemoveServiceByIdUseInputClassValidator } from 'src/infra/core/nestjs/pipes/service/removeById/RemoveServiceByIdUseCaseInput';
import { FindServiceByIdUseCaseNestjs } from 'src/infra/core/nestjs/modules/service/useCases/findServiceById/FindServiceByIdUseCaseNestjs';

@Controller('/services')
export class FindServiceByIdController extends BaseController {
  constructor(
    private readonly findServiceByIdUseCaseNestjs: FindServiceByIdUseCaseNestjs,
  ) {
    super();
  }
  @Get('/:id')
  async handle(
    @Res() response: Response,
    @Param() params: RemoveServiceByIdUseInputClassValidator,
  ): Promise<Response> {
    try {
      const { id } = params;

      const service = await this.findServiceByIdUseCaseNestjs.execute(id);

      return response.status(200).json({
        error: false,
        status: 200,
        message: 'Serviço encontrado com sucesso!',
        data: [service],
      });
    } catch (e) {
      Logger.error(
        `Error no controlador ${FindServiceByIdController.name} error: ${e}`,
      );

      if (e.message.includes('service does not exist')) {
        return response.status(500).json({
          error: false,
          status: 500,
          message: 'Serviço não encontrado!',
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
