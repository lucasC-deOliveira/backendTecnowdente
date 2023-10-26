import { Body, Controller, Logger, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { BaseController } from 'src/domain/base/baseController/BaseController';
import { CreateClientUseCaseNestjs } from 'src/infra/core/nestjs/modules/client/useCases/createClient/CreateClientUseCaseNestjs';
import { CreateClientUseCaseInputClassValidator } from 'src/infra/core/nestjs/pipes/client/create/CreateClientUseCaseInputClassValidator';
@Controller('/clients')
export class CreateClientController extends BaseController {
  constructor(private createClientUseCaseNestjs: CreateClientUseCaseNestjs) {
    super();
  }
  @Post('/')
  async handle(
    @Body() data: CreateClientUseCaseInputClassValidator,
    @Res() request: Response,
  ): Promise<Response> {
    const { cnpj, name } = data;
    try {
      await this.createClientUseCaseNestjs.execute({ cnpj, name });

      return request.status(201).json({
        error: false,
        status: 200,
        message: 'Client criado com sucesso!',
        data: [],
      });
    } catch (e) {
      Logger.error(
        `Error no controlador: ${CreateClientController.name}, Error: ${e.message}`,
      );

      if (e.message.includes('Client already exists!')) {
        return request.status(400).json({
          error: true,
          status: 404,
          message: 'Client already exists!',
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
