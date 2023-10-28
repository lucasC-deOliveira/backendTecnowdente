import { Body, Controller, Logger, Put, Res } from '@nestjs/common';
import { Response } from 'express';
import { BaseController } from 'src/domain/base/baseController/BaseController';
import { EditClientUseCaseNestjs } from 'src/infra/core/nestjs/modules/client/useCases/editClient/EditClientUseCaseNestjs';
import { EditClientUseCaseInputClassValidator } from 'src/infra/core/nestjs/pipes/client/edit/EditClientUseCaseInputClassValidator';
@Controller('/clients')
export class EditClientController extends BaseController {
  constructor(private editClientUseCaseNestjs: EditClientUseCaseNestjs) {
    super();
  }
  @Put('/')
  async handle(
    @Body() data: EditClientUseCaseInputClassValidator,
    @Res() request: Response,
  ): Promise<Response> {
    const { cnpj, name, id } = data;
    try {
      await this.editClientUseCaseNestjs.execute({ cnpj, name, id });

      return request.status(201).json({
        error: false,
        status: 200,
        message: 'Cliente editado com sucesso!',
        data: [],
      });
    } catch (e) {
      Logger.error(
        `Error no controlador: ${EditClientController.name}, Error: ${e.message}`,
      );

      if (e.message.includes("client doesn't exists")) {
        return request.status(404).json({
          error: true,
          status: 404,
          message: 'Client não encontrado!',
          data: [],
        });
      }
      if (e.message.includes('Client already exists!')) {
        return request.status(400).json({
          error: true,
          status: 404,
          message: 'Client already cnpj exists!',
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
