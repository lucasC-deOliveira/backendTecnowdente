import { Body, Controller, Logger, Put, Res } from '@nestjs/common';
import { BaseController } from 'src/domain/base/baseController/BaseController';
import { Response } from 'express';
import { EditServiceUseCaseNestjs } from 'src/infra/core/nestjs/modules/service/useCases/editService/EditServiceUseCaseNestjs';
import { EditServiceUseCaseInputClassValidator } from 'src/infra/core/nestjs/pipes/service/edit/EditServiceUseCaseInputClassValidator';

@Controller('/services')
export class EditServiceController extends BaseController {
  constructor(
    private readonly editServiceUseCaseNestjs: EditServiceUseCaseNestjs,
  ) {
    super();
  }
  @Put('/')
  async handle(
    @Body() data: EditServiceUseCaseInputClassValidator,
    @Res() response: Response,
  ): Promise<Response> {
    const { amount, cost, name, id } = data;
    try {
      await this.editServiceUseCaseNestjs.execute({
        amount,
        cost,
        name,
        id,
      });

      return response.status(200).json({
        error: false,
        status: 200,
        message: 'Serviço editado com sucesso!',
        data: [],
      });
    } catch (e) {
      Logger.error(
        `Error no controlador ${EditServiceController.name} error: ${e}`,
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
