import { Controller, Delete, Logger, Param, Res } from '@nestjs/common';
import { Response } from 'express';
import { BaseController } from 'src/domain/base/baseController/BaseController';
import { RemoveClientUseCaseNestjs } from 'src/infra/core/nestjs/modules/client/useCases/removeClient/RemoveClientUseCaseNestjs';
import { RemoveClientUseCaseInputClassValidator } from 'src/infra/core/nestjs/pipes/client/remove/RemoveClientUseCaseInputClassValidator';
@Controller('/clients')
export class RemoveClientController extends BaseController {
  constructor(private removeClientUseCaseNestjs: RemoveClientUseCaseNestjs) {
    super();
  }
  @Delete('/:id')
  async handle(
    @Res() response: Response,
    @Param() params: RemoveClientUseCaseInputClassValidator,
  ): Promise<any> {
    const { id } = params;
    try {
      await this.removeClientUseCaseNestjs.execute(id);

      return response.status(200).json({
        status: 200,
        message: 'Cliente removido com sucesso!',
        data: [],
        error: false,
      });
    } catch (e) {
      Logger.error(
        `Error no controlador: ${RemoveClientController.name}, Error: ${e.message}`,
      );
      if (e.message.includes('not exists')) {
        return response.status(404).json({
          error: true,
          status: 404,
          message: 'Cliente não encontrado!',
          data: [],
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
