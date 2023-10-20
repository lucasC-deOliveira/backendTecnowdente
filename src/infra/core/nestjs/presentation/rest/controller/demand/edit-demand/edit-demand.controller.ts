import { Body, Controller, Logger, Put, Res } from '@nestjs/common';
import { BaseController } from 'src/domain/base/baseController/BaseController';
import { Response } from 'express';
import { EditDemandUseCaseNestjs } from 'src/infra/core/nestjs/modules/demand/useCases/editDemand/EditDemandUseCaseNestjs';
import { EditDemandUseCaseInputClassValidator } from 'src/infra/core/nestjs/pipes/demands/edit/EditDemandUseCaseInputClassValidator';

@Controller('/demands')
export class EditDemandController extends BaseController {
  constructor(
    private readonly editDemandUseCaseNestjs: EditDemandUseCaseNestjs,
  ) {
    super();
  }
  @Put('/')
  async handle(
    @Body() data: EditDemandUseCaseInputClassValidator,
    @Res() response: Response,
  ): Promise<Response> {
    const {
      amount,
      client_id,
      deadline,
      id,
      patient,
      services,
      state,
      type,
      observations,
    } = data;

    try {
      await this.editDemandUseCaseNestjs.execute({
        amount,
        client_id,
        deadline,
        id,
        patient,
        services,
        state,
        type,
        observations,
      });

      return response.status(200).json({
        error: false,
        status: 200,
        message: 'Demanda editada com sucesso!',
        data: [],
      });
    } catch (e) {
      Logger.error(
        `Error no controlador ${EditDemandController.name} error: ${e.message}`,
      );
      if (e.message.includes('At least one service must be provided')) {
        return response.status(400).json({
          error: true,
          status: 400,
          message: 'Uma demanda deve ter pelo menos um serviço!',
          data: [],
        });
      }
      if (e.message.includes('Demand does not exists')) {
        return response.status(404).json({
          error: true,
          status: 404,
          message: 'Demanda não encontrada!',
          data: [],
        });
      }
      if (e.message.includes('Service does not exist:')) {
        const serviceName = e.message.split(':')[1].trim();
        return response.status(404).json({
          error: true,
          status: 404,
          message: `Serviço ${serviceName} não encontrado!`,
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
