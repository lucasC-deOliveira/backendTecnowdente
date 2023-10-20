import { Body, Controller, Get, Logger, Param, Put, Res } from '@nestjs/common';
import { Response } from 'express';
import { BaseController } from 'src/domain/base/baseController/BaseController';
import { FindClientByIdUseCaseNestjs } from 'src/infra/core/nestjs/modules/client/useCases/findClientById/FindClientByIdUseCase';
import { FindClientByIdUseCaseClassValidator } from 'src/infra/core/nestjs/pipes/client/findById/FindClientByIdUseCaseInputClassValidator';
@Controller('/clients')
export class FindClientByIdController extends BaseController {
  constructor(
    private findClientByIdUseCaseNestjs: FindClientByIdUseCaseNestjs,
  ) {
    super();
  }
  @Get('/:id')
  async handle(
    @Param() data: FindClientByIdUseCaseClassValidator,
    @Res() request: Response,
  ): Promise<Response> {
    const { id } = data;
    try {
      const client = await this.findClientByIdUseCaseNestjs.execute(id);

      return request.status(201).json({
        error: false,
        status: 200,
        message: 'Cliente encontrado com sucesso!',
        data: [client],
      });
    } catch (e) {
      Logger.error(
        `Error no controlador: ${FindClientByIdController.name}, Error: ${e.message}`,
      );

      if (e.message.includes('client does not found')) {
        return request.status(404).json({
          error: true,
          status: 404,
          message: 'Client não encontrado!',
          data: [],
        });
      }

      return request.status(500).json({
        error: true,
        status: 500,
        message: 'Erro interno do servidor!',
        data: [],
      });
    }
  }
}
